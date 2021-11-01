package utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import utils.Configurable;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.json.JSONObject;

public class AppConfig {

//	public static String PATH_APIM = null;
//	public static String PATH_JWEBUI = null;
//	private static final String CONFIG_FILE = "conf//apim-conf.properties";
//	static {
//		try {
//			Configurable con = new Configurable(CONFIG_FILE);
//
//			PATH_JWEBUI = con.getString("PATH_JWEBUI");
//			PATH_APIM = con.getString("PATH_APIM");
//		} catch (IOException ex) {
//			System.out.println(ex.getMessage());
//			ex.printStackTrace();
//		}
//	}
	
//	// Set up for Jwebui
//			public static String HOSTWEBUI = PATH_JWEBUI.split(":")[0];
//			public static String PORTWEBUI = PATH_JWEBUI.split(":")[1].split("/")[0];
//			public static String PATHWEBUI = (PATH_JWEBUI.replaceAll(PORTWEBUI, "")).replaceAll(HOSTWEBUI + ":", "");
//			// Set up for APIM
//			public static String HOSTAPI = PATH_APIM.split(":")[0];
//			public static String PORTAPI = PATH_APIM.split(":")[1];
	
//	public static String getConfig() {
//		// Set up for Jwebui
//		String HOSTWEBUI = PATH_JWEBUI.split(":")[0];
//		String PORTWEBUI = PATH_JWEBUI.split(":")[1].split("/")[0];
//		String PATHWEBUI = (PATH_JWEBUI.replaceAll(PORTWEBUI, "")).replaceAll(HOSTWEBUI + ":", "");
//		// Set up for APIM
//		String HOSTAPI = PATH_APIM.split(":")[0];
//		String PORTAPI = PATH_APIM.split(":")[1];
//		JSONObject json = new JSONObject();
//		json.put("HOSTWEBUI", HOSTWEBUI);
//		json.put("PORTWEBUI", PORTWEBUI);
//		json.put("PATHWEBUI", PATHWEBUI);
//		json.put("HOSTAPI", HOSTAPI);
//		json.put("PORTAPI", PORTAPI);
//		System.out.println(json.toString());
//		return json.toString();
//	}
}
