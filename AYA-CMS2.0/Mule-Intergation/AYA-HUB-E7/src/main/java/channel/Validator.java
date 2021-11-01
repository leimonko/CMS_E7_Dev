package channel;

import org.apache.log4j.Logger;
import org.json.JSONObject;

public class Validator {
	private static final Logger logger = Logger.getLogger(Validator.class);

	/*
	 * Method sub string phone number by commas "," and return Input: payload
	 * message is JSON with DRTEL
	 */
	public String validatePhoneNumber(String payload) {
		try {
			JSONObject payloadJSON = new JSONObject();
			String drTel = payloadJSON.getString("DRTEL");
			String[] telList = drTel.split(",");
			payloadJSON.put("DRTEL", telList[1]);
			logger.info("\nMessage return Validator.validatePhoneNumber: " + payloadJSON.toString());
			return payloadJSON.toString();

		} catch (Exception e) {
			logger.info("\nException Message return Validator.validatePhoneNumber: " + e.getMessage());
			return payload;
		}
		// return "";
	}

}
