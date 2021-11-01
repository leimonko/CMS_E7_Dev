package util;

import java.io.IOException;

import util.Configurable;

public class AppConfig {
	public AppConfig() {
	}

	// private static final Logger logger = Logger.getLogger(AppConfig.class);
	// private static final String LOGGER_CONF = "conf/interface_logger.properties";
	public static String USERNAME;
	public static String PASSWORD;
	public static String SESSIONID;
	public static String WORKINGDATE;
	public static String PATH_JWEBUI;
	public static String PATH_CBS;
	private static final String CONFIG_FILE = "conf/config.conf";
	static {
		try {
			// Properties cfg = new Properties();
			// cfg.load(new FileInputStream(new File(LOGGER_CONF)));
			// PropertyConfigurator.configure(cfg);
			Configurable con = new Configurable(CONFIG_FILE);
			USERNAME = con.getString("USERNAME");
			PASSWORD = con.getString("PASSWORD");
			System.out.println(USERNAME + "  " + PASSWORD);
			// PATH_JWEBUI = con.getString("PATH_JWEBUI");
			// PATH_CBS = con.getString("PATH_CBS");
		} catch (IOException ex) {
			System.out.println(ex.getMessage());
			ex.printStackTrace();
		}
	}

	public String loadConfig() {

		return "";
	}

}
