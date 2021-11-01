package util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import org.apache.log4j.Logger;

public class ConnectSQLITE {
	public static String URL = "jdbc:sqlite:./conf/HUBConnection.db";
	Logger logger = Logger.getLogger(ConnectSQLITE.class);

	public Connection OpenConnection() {
		// SQLite connection string
		Connection conn = null;
		try {
			conn = DriverManager.getConnection(URL);
		} catch (SQLException e) {
			logger.info("\n" + e.getMessage());
		}
		return conn;
	}

	public String getSessionIdByUsername(String username) {
		String sql = "SELECT * FROM Connection where username='" + username + "'";
		Connection conn = null;
		try {
			conn = this.OpenConnection();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			// loop through the result set
			while (rs.next()) {
				String sessionid = rs.getString("sessionid");
				// conn.close();
				return sessionid;
			}
			stmt.close();
			rs.close();
			conn.close();
		} catch (SQLException e) {
			logger.info("\nConnectionSQLITE.getSessionIdByUsername:" + e.getMessage());
		} finally {
			try {
				if (conn != null && !conn.isClosed())
					conn.close();
			} catch (Exception e) {
				logger.info("\nConnectionSQLITE.getSessionIdByUsername:" + e.getMessage());

			}
		}
		return "";
	}

	public String getTokenByIRDUsername(String irdUsername) {
		String sql = "SELECT * FROM TOKENIRD where username='" + irdUsername + "'";
		Connection conn = null;

		try {
			conn = this.OpenConnection();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			// loop through the result set
			while (rs.next()) {

				String token = rs.getString("token");
				return token;
			}
			stmt.close();
			rs.close();
			conn.close();
		} catch (SQLException e) {
			logger.info("\nConnectionSQLITE.getTokenByIRDUsername:" + e.getMessage());
		} finally {
			try {
				if (conn != null && !conn.isClosed())
					conn.close();
			} catch (Exception e) {
				logger.info("\nConnectionSQLITE.getTokenByIRDUsername:" + e.getMessage());
			}
		}
		return "";
	}

	public String getBranchIdByUsername(String username) {
		String sql = "SELECT * FROM Connection where username='" + username + "'";
		Connection conn = null;
		try {
			conn = this.OpenConnection();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			// loop through the result set
			while (rs.next()) {
				String branchid = rs.getString("branchid");

				return branchid;
			}
			stmt.close();
			rs.close();
			conn.close();
		} catch (SQLException e) {
			logger.info("\nSQLException ConnectionSQLITE.getBranchIdByUsername:" + e.getMessage());
		} finally {
			try {
				if (conn != null && !conn.isClosed())
					conn.close();
			} catch (Exception e) {
				logger.info("\nException ConnectionSQLITE.getBranchIdByUsername:" + e.getMessage());

			}
		}
		return "";
	}

	public String getWorkingDateByUsername(String username) {
		String sql = "SELECT * FROM connection where username='" + username + "'";
		Connection conn = null;
		try {
			conn = this.OpenConnection();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			// loop through the result set
			while (rs.next()) {
				// System.out.println(rs.getString("username") + "\t" +
				// rs.getString("sessionid") + "\t");
				String workingDate = rs.getString("WORKINGDATE");
				// conn.close();
				return workingDate;
			}
			stmt.close();
			rs.close();
			conn.close();
		} catch (SQLException e) {
			logger.info("\nSQLException ConnectionSQLITE.getWorkingDateByUsername:" + e.getMessage());
		} finally {
			try {
				if (conn != null && !conn.isClosed())
					conn.close();
			} catch (Exception e) {
				logger.info("\nException ConnectionSQLITE.getWorkingDateByUsername:" + e.getMessage());
			}
		}
		return "";
	}

	public void insertSessionId(String username, String sessionid, String date, String branchid) {
		String sql = "SELECT * FROM connection where username='" + username + "'";
		Connection conn = null;
		try {
			conn = this.OpenConnection();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			// loop through the result set
			if (rs.next() == false) {
				sql = "Insert into Connection (username,sessionid,workingDate,branchid) values ('" + username + "','"
						+ sessionid + "','" + date + "','" + branchid + "')";
				stmt.executeUpdate(sql);

			} else {
				sql = "Update Connection set sessionid='" + sessionid + "',workingDate='" + date + "',branchid='"
						+ branchid + "' where username='" + username + "'";
				stmt.executeUpdate(sql);
			}
			conn.close();
		} catch (SQLException e) {
			System.out.println(e.getMessage());
		} finally {
			try {
				if (conn != null && !conn.isClosed())
					conn.close();
			} catch (Exception e) {
				logger.info("\nException ConnectionSQLITE.insertSessionId:" + e.getMessage());
			}
		}
	}

	public void insertTokenIRD(String username, String code, String desc, String token, String expiretime) {

		String sql = "SELECT * FROM TokenIRD where username='" + username + "'";

		Connection conn = null;
		try {
			conn = this.OpenConnection();
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			// loop through the result set
			if (rs.next() == false) {
				String sqlInsert = "Insert into TokenIRD (username, code, desc, token, expiretime) values (?,?,?,?,?)";

				PreparedStatement stmtInsert = conn.prepareStatement(sqlInsert);
				stmtInsert.setString(1, username);
				stmtInsert.setString(2, code);
				stmtInsert.setString(3, desc);
				stmtInsert.setString(4, token);
				stmtInsert.setString(5, expiretime);
				stmtInsert.execute();

			} else {
				String sqlUpdate = "Update TokenIRD set code = ?, desc = ?, token = ?, expiretime = ? where username = ?";
				PreparedStatement stmtUpdate = conn.prepareStatement(sqlUpdate);
				stmtUpdate.setString(1, code);
				stmtUpdate.setString(2, desc);
				stmtUpdate.setString(3, token);
				stmtUpdate.setString(4, expiretime);
				stmtUpdate.setString(5, username);
				stmtUpdate.execute();

			}
			conn.close();
		} catch (SQLException e) {
			logger.info("\nConnectionSQLITE.insertTokenIRD: " + e.getMessage());
		} catch (Exception e) {
			logger.info("\nConnectionSQLITE.insertTokenIRD: " + e.getMessage());
		} finally {
			try {
				if (conn != null && !conn.isClosed())
					conn.close();
			} catch (Exception e) {
				logger.info("\nConnectionSQLITE.insertTokenIRD: " + e.getMessage());
			}
		}
	}

}
