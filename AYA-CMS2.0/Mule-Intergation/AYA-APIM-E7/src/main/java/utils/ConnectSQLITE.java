package utils;

import java.io.File;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONObject;

public class ConnectSQLITE {
//	static File file = new File("");
	private static final String CONFIG_FILE = "/bin/conf/APIManagement.db";
	static String muleHome = System.getProperty("mule.home") ;
	Logger logger = Logger.getLogger(ConnectSQLITE.class);
	public static String URL = "jdbc:sqlite:" + muleHome + CONFIG_FILE;

	public Connection OpenConnection() {
		// SQLite connection string
		Connection conn = null;
		try {
			conn = DriverManager.getConnection(URL);
		} catch (SQLException e) {
			logger.info("\nConnectSQLITE.OpenConnection " + e.getMessage());
		}
		return conn;
	}

	public JSONObject QueryData(String query) {
		JSONArray jsArray = new JSONArray();
		JSONObject jsData = new JSONObject();
		JSONObject jsReturn = new JSONObject();
		String errorcode = "", errordesc = "";

		Connection conn = null;
		try {
			conn = this.OpenConnection();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			logger.info("\nConnectSQLITE.QueryData: Query SQL " + query);

			while (rs.next()) {
				int total_rows = rs.getMetaData().getColumnCount();

				jsData = new JSONObject();
				for (int i = 0; i < total_rows; i++) {
					jsData.put(rs.getMetaData().getColumnLabel(i + 1).toLowerCase(), rs.getObject(i + 1));
				}
				jsArray.put(jsData);
			}
			errorcode = "0";
			errordesc = "Transaction Successfully!";

			stmt.close();
			rs.close();
			conn.close();
		} catch (SQLException e) {
			errorcode = "1111";
			errordesc = e.getMessage();
			logger.info("\nConnectSQLITE.QueryData: SQLException " + e.getMessage());

		} catch (Exception e) {
			errorcode = "2222";
			errordesc = e.getMessage();
			logger.info("\nConnectSQLITE.QueryData: Exception " + e.getMessage());

		} finally {
			try {
				if (conn != null && !conn.isClosed())
					conn.close();
			} catch (Exception e) {
				logger.info("\nConnectSQLITE.QueryData: Finally Exception " + e.getMessage());
			}
		}

		jsReturn.put("ERRORCODE", errorcode);
		jsReturn.put("ERRORDESC", errordesc);
		jsReturn.put("RESULT", jsArray);

		return jsReturn;

	}

	public JSONObject UpdateData(String query) {
		JSONObject jsReturn = new JSONObject();
		String errorcode, errordesc;
		Connection conn = null;

		try {
			conn = this.OpenConnection();
			Statement stmt = conn.createStatement();

			stmt.executeUpdate(query);

			errorcode = "0";
			errordesc = "Transaction Successfully!";

			stmt.close();
			conn.close();
		} catch (SQLException e) {
			errorcode = "1111";
			errordesc = e.getMessage();
			logger.info("\nConnectSQLITE.UpdateData: SQLException " + e.getMessage());
		} catch (Exception e) {
			errorcode = "2222";
			errordesc = e.getMessage();
			// logger.info(e.getMessage());
			logger.info("\nConnectSQLITE.UpdateData: Exception " + e.getMessage());
		} finally {
			try {
				if (conn != null && !conn.isClosed())
					conn.close();
			} catch (Exception e) {
				logger.info("\nConnectSQLITE.UpdateData: Finally Exception " + e.getMessage());
			}
		}
		jsReturn.put("ERRORCODE", errorcode);
		jsReturn.put("ERRORDESC", errordesc);
		return jsReturn;
	}

	public List<String> getAudienceByUsername(String username) {
		String query = "SELECT apiuri FROM Audience WHERE Audience.status = 'A' AND permissionid IN (SELECT p.permissionid FROM Channel r,Permission p WHERE r.channelid = p.permissionid AND p.userid IN (SELECT userid FROM User WHERE lgname = ? AND  User.status = 'A'))";

		List<String> list = new ArrayList<String>();
		List<String> listDistinct = new ArrayList<String>();
		Connection conn = null;
		try {
			conn = this.OpenConnection();
			PreparedStatement stmt = conn.prepareStatement(query);
			stmt.setString(1, username);
			ResultSet rs = stmt.executeQuery();
			while (rs.next()) {
				list.add(rs.getString("apiuri"));
			}
			// Avoid duplicate apiuri
			listDistinct = list.stream().distinct().collect(Collectors.toList());

			stmt.close();
			rs.close();
			conn.close();
		} catch (SQLException e) {
			logger.info("\nConnectSQLITE.getAudienceByUsername: SQLException " + e.getMessage());
		} catch (Exception e) {

			logger.info("\nConnectSQLITE.getAudienceByUsername: Exception " + e.getMessage());
		} finally {
			try {
				if (conn != null && !conn.isClosed())
					conn.close();
			} catch (Exception e) {
				logger.info("\nConnectSQLITE.getAudienceByUsername: Exception " + e.getMessage());
			}
		}

		return listDistinct;
	}

	public List<String> getChannelNameByUsername(String username) {
		String query = "SELECT * From Channel Where channelid in (SELECT p.channelid FROM Permission p where p.status = 'A' and p.userid = (SELECT userid from User where lgname = ? and status = 'A'))";
		List<String> channelName = new ArrayList<String>();
		Connection conn = null;
		List<String> channelNameDist = new ArrayList<String>();
		try {
			conn = this.OpenConnection();
			PreparedStatement stmt = conn.prepareStatement(query);
			stmt.setString(1, username);
			ResultSet rs = stmt.executeQuery();
			while (rs.next()) {
				channelName.add(rs.getString("name"));
			}

			// Avoid duplicate channelID
			channelNameDist = channelName.stream().distinct().collect(Collectors.toList());

			stmt.close();
			rs.close();
			conn.close();
		} catch (SQLException e) {
			logger.info("\nConnectSQLITE.getChannelNameByUsername: SQLException " + e.getMessage());
		} catch (Exception e) {

			logger.info("\nConnectSQLITE.getChannelNameByUsername: Exception " + e.getMessage());
		} finally {
			try {
				if (conn != null && !conn.isClosed())
					conn.close();
			} catch (Exception e) {
				logger.info("\nConnectSQLITE.getChannelNameByUsername: Exception " + e.getMessage());
			}
		}
		return channelNameDist;
	}

}
