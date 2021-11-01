package mulegateway;

import org.apache.log4j.Logger;
import com.fasterxml.jackson.core.JsonProcessingException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import utils.Configurable;
import utils.ConnectSQLITE;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Array;
import java.util.ArrayList;
import java.util.Arrays;
//import java.time.Instant;
//import java.time.temporal.ChronoUnit;
import java.util.Base64;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.UUID;
import javax.xml.bind.DatatypeConverter;
import org.json.*;

public class JWTHelper {
	public static final Logger logger = Logger.getLogger(JWTHelper.class);
	public static final String KEYTYPE = "Production";
	public static final String SECRETKEY = "Qm95RGVwWmFpSGFuZHNvbWVObzE=";
	public static final ConnectSQLITE sqlite = new ConnectSQLITE();
	private static final String CONFIG_FILE = "/bin/conf/apim-conf.properties";

	private static int EXPIRE_TIME = 86400;
	static {
		try {

			String url = System.getProperty("mule.home") + CONFIG_FILE;
			System.out.println(url);
			 Configurable con = new Configurable(url);
			 EXPIRE_TIME = con.getInt("EXPIRE_TIME");
		} catch (IOException ex) {
			System.out.println(ex.getMessage());
			ex.printStackTrace();
		}
	}

	public String VerifyHeader(String authorization) {

		logger.info("\nAuthorization Header: " + authorization);
		authorization = authorization.replaceAll("Basic ", "");
		// Getting decoder
		Base64.Decoder decoder = Base64.getDecoder();
		JSONObject js = new JSONObject();
		try {
			// Decoding string
			String[] dStr = new String(decoder.decode(authorization)).split(":");
			String query = "SELECT * FROM USER where lgname = '" + dStr[0] + "'";
			System.out.println(query);

			JSONObject jsResult = sqlite.QueryData(query);
			// System.out.println(jsResult);
			JSONArray jsArray = jsResult.getJSONArray("RESULT");
			if (jsResult.getString("ERRORCODE").equals("0") && jsArray.length() > 0) {
				js.put("username", dStr[0]);
				js.put("message", "Authorization success!");
				js.put("statusCode", 0);
			} else {
				js.put("message", "Unauthorized Error!");
				js.put("statusCode", 401);
			}
		} catch (Exception e) {
			js.put("message", "Unauthorized Error!");
			js.put("statusCode", 401);
		}
		return js.toString();
	}

	public JSONObject createToken(String issuer) throws JsonProcessingException {
		JSONObject jsReturn = new JSONObject();
		String subject = "HUB2.0 Api Management";

		List<String> audience = sqlite.getAudienceByUsername(issuer);
		List<String> channelName = sqlite.getChannelNameByUsername(issuer);
		// System.out.println(channelName);
		Date datenow = new Date();
		long datetime = datenow.getTime() + EXPIRE_TIME * 1000;
		String jwt = Jwts.builder().setHeaderParam("type", "JWT").setSubject(subject).setExpiration(new Date(datetime))
				.setIssuer("https://jits.com.vn").setIssuedAt(datenow).setId(UUID.randomUUID().toString())
				.claim("name", issuer).claim("aud", audience).claim("channel", channelName).claim("keytype", KEYTYPE)
				.signWith(SignatureAlgorithm.HS256, DatatypeConverter.parseBase64Binary(SECRETKEY)).compact();
		jsReturn.put("statusCode", 0);
		jsReturn.put("message", "Authorization success!");
		jsReturn.put("access_token", jwt);
		jsReturn.put("token_type", "Bearer");
		jsReturn.put("expire_time", EXPIRE_TIME);
		return jsReturn;
	}

	public boolean checkPermission(List<String> jwtScope, String inputScope) {
		boolean bPermission = false;
		try {
			if (jwtScope.contains(inputScope))
				bPermission = true;

		} catch (Exception e) {
			logger.info("\nJWTHelper.checkPermission: Exception " + e.getMessage());
		}
		return bPermission;
	}

	public JSONObject verifyToken(String token, String scope, String channelID) {
		token = token.replaceAll("Bearer ", "");
		JSONObject jsReturn = new JSONObject();

		try {
			Claims claims = Jwts.parser().setSigningKey(DatatypeConverter.parseBase64Binary(SECRETKEY))
					.parseClaimsJws(token).getBody();
			JSONObject json = new JSONObject(claims);
			List<String> listdata = new ArrayList<String>();
			String username = json.getString("name");
			JSONArray jArray = (JSONArray) json.get("aud");
			if (jArray != null) {
				for (int i = 0; i < jArray.length(); i++) {
					listdata.add(jArray.getString(i));
				}
			}
			System.out.println(json.get("channel"));
			List<String> channel = new ArrayList<String>();

			JSONArray jArrayChannel = json.getJSONArray("channel");
			if (jArray != null) {
				for (int i = 0; i < jArrayChannel.length(); i++) {
					channel.add(jArrayChannel.getString(i));
				}
			}
			System.out.println(channel);

			if (channelID != null && channel.contains(channelID)) {
				// Check permission
				if (listdata.contains(scope)) {
					jsReturn.put("message", "Token is valid!");
					jsReturn.put("statusCode", 0);
				} else {
					jsReturn.put("message", "Token not have permission to do transaction!");
					jsReturn.put("statusCode", 401);
				}
			} else {
				jsReturn.put("message", "Invalid CHANNELID!");
				jsReturn.put("statusCode", 401);
			}

		} catch (ExpiredJwtException | MalformedJwtException | SignatureException | UnsupportedJwtException
				| IllegalArgumentException e) {
			logger.info("\n\nInvalid Token!!! " + e.getMessage());
			jsReturn.put("message", "Invalid Token!");
			jsReturn.put("statusCode", 401);
		} catch (Exception e) {
			logger.info("\n\nInvalid Token!!! " + e.getMessage());
			jsReturn.put("message", "Invalid Token!");
			jsReturn.put("statusCode", 401);
		}
		return jsReturn;
	}

}
