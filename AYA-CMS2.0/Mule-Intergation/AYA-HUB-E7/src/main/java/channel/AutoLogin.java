package channel;

import java.io.IOException;
import java.text.SimpleDateFormat;
//import utils.DataLogger;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.time.LocalDateTime;
import org.apache.log4j.Logger;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.json.JSONObject;
import org.mortbay.util.ajax.JSON;

import util.Configurable;
import util.ConnectSQLITE;

import java.util.UUID;

public class AutoLogin {
	private static final Logger logger = Logger.getLogger(AutoLogin.class);
	public static String USERNAME;
	public static String PASSWORD;
	public static String APPLICATIONID;
	public static String SESSIONID;
	public static String WORKINGDATE;
	public static String WORKINGDATE2;
	public static String WORKINGDATE3;
	public static String IRD_USERNAME;
	public static String IRD_PASSWORD;
	public static String IRD_TOKEN;

	private static final String CONFIG_FILE = "conf/hub2.0-conf.properties";

	static {
		try {
			Configurable con = new Configurable(CONFIG_FILE);
			USERNAME = con.getString("USERNAME");
			PASSWORD = con.getString("PASSWORD");
			APPLICATIONID = con.getString("APPID");
			IRD_USERNAME = con.getString("IRD_USERNAME");
			IRD_PASSWORD = con.getString("IRD_PASSWORD");
			

		} catch (IOException ex) {
			System.out.println(ex.getMessage());
			ex.printStackTrace();
		}
	}

	ConnectSQLITE sqlite3 = new ConnectSQLITE();

	public String letLogin() throws JsonGenerationException, JsonMappingException, IOException {
		JSONObject json = new JSONObject();
		json.put("USERNAME", USERNAME);
		json.put("PASSWORD", PASSWORD);
		json.put("APPLICATIONID", APPLICATIONID);
		json.put("OSUSERID", APPLICATIONID);
		json.put("PASSCODE", "");
		logger.info("\n======================================================" + "\nLogin To FBE with username:"
				+ USERNAME + "Application id: " + APPLICATIONID
				+ "\n======================================================");
		return json.toString();
	}

	public String saveSession(String payload) {
		JSONObject json = new JSONObject(payload);
		String temp = json.get("RESULT").toString();
		json = new JSONObject(temp);
		String sessionid = json.getString("SESSIONID");
		String workingdate = "";
		String branchid = "";
		sqlite3.insertSessionId(USERNAME, sessionid, workingdate, branchid);
//		System.out.println("saveToDB");
		return temp;
	}

	public String saveToken(String payload) {
//		System.out.println(payload);
		try {
			JSONObject json = new JSONObject(payload);
			String code = json.getString("code");
			String desc = json.getString("desc");
			String token = json.getString("token");
			String expiretime = json.getString("expiry_date_time");
			sqlite3.insertTokenIRD(IRD_USERNAME, code, desc, token, expiretime);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		return payload;
	}
	
	public String getToken(String payload) {
		try {
			JSONObject json = new JSONObject(payload);
			IRD_TOKEN = sqlite3.getTokenByIRDUsername(IRD_USERNAME);
//			System.out.println(IRD_TOKEN);
			json.put("IRD_TOKEN", IRD_TOKEN);
			return json.toString();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		return "";
	}

	public String getSession(String payload) {
		SESSIONID = sqlite3.getSessionIdByUsername(USERNAME);
		JSONObject json = new JSONObject(payload);
		json.put("SESSIONID", SESSIONID);
		return json.toString();
	}

	public String getBranchIDOld() {
		String branid = sqlite3.getBranchIdByUsername(USERNAME);
		JSONObject json = new JSONObject();
		json.put("BRANID", branid);
		return json.toString();

	}
	
	public String getBranchID(String payload) {
		String branid = sqlite3.getBranchIdByUsername(USERNAME);

		JSONObject json = new JSONObject();
		json = new JSONObject(payload);
		json.put("USRID", USERNAME);
		json.put("BRANID", branid);
		
		logger.info("\nMessage return AutoLogin.getBranchID: " + json.toString());
		return json.toString();
	}

	public String getSessionID(String payload) {
		JSONObject json = new JSONObject();
		try {
			json = new JSONObject(payload);
			SESSIONID = sqlite3.getSessionIdByUsername(USERNAME);
			DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
			DateTimeFormatter dtf2 = DateTimeFormatter.ofPattern("dd/MM/yyyy");
			DateTimeFormatter dtf3 = DateTimeFormatter.ofPattern("yyyyMMdd");
			
			LocalDateTime now = LocalDateTime.now();
			WORKINGDATE = dtf.format(now);
			WORKINGDATE2 = dtf2.format(now);
			WORKINGDATE3 = dtf3.format(now);
			
			json.put("SESSIONID", SESSIONID);
			json.put("WORKINGDATE", WORKINGDATE);
			json.put("WORKINGDATE2", WORKINGDATE2);
		} catch (Exception e) {
			logger.info("\nException getSessionID" + e.getMessage());
			json.put("SESSIONID", "");
			json.put("WORKINGDATE", "");
			json.put("WORKINGDATE2", "");
		}
//		logger.info("\nMessage getSessionID" + json.toString());
		return json.toString();
	}

	public String getMsgCleanLog() {
		String pattern = "yyyy-MM-dd";
		JSONObject json = new JSONObject();
		Date dateNow = new Date();
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		String date = simpleDateFormat.format(dateNow);
		long dateEpochTime = dateNow.getTime();
		json.put("DATE", date);
		json.put("TXDT", dateEpochTime);

		logger.info("\nMessage Clean Log" + json.toString());
		return json.toString();

	}

	public String getWorkingDate(String payload) {
		SESSIONID = sqlite3.getSessionIdByUsername(USERNAME);
		WORKINGDATE = sqlite3.getWorkingDateByUsername(USERNAME);
		JSONObject json = new JSONObject(payload);
		json.put("WORKINGDATE", WORKINGDATE);
		json.put("SESSIONID", SESSIONID);
		return json.toString();
	}

	public synchronized String getUUID() {
		UUID uuid = UUID.randomUUID();
		String randomUUIDString = uuid.toString();
		return randomUUIDString;
	};

}
