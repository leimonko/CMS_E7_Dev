/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.lang.reflect.Constructor;
import java.util.Properties;
import org.apache.commons.lang.ObjectUtils.Null;
import org.apache.log4j.Logger;

/**
 *
 * @author Apple
 */
public class Configurable {
	Logger logger = Logger.getLogger(Configurable.class);
	protected String conf_file = "";
	protected Properties cfg;

	public Configurable() {
	}

	public Configurable(String file) throws IOException {
		setConfiguration(file);
	}

	public void setConfiguration(String file) throws IOException {
		this.conf_file = file;
		cfg = new Properties();
		cfg.load(new FileInputStream(new File(file)));
	}

	public void setConfiguration(Properties p) {
		this.conf_file = "";
		this.cfg = (Properties) p.clone();
	}

	public String getString(String key) {
		return cfg.getProperty(key);
	}

	public boolean getBoolean(String key) {
		return Boolean.parseBoolean(cfg.getProperty(key));
	}

	public int getInt(String key) {
		return Integer.parseInt(cfg.getProperty(key));
	}

	public long getLong(String key) {
		return Long.parseLong(cfg.getProperty(key));
	}

	/**
	 * Create new object instance with class name Only support for class with
	 * no-parameter constructor
	 * 
	 * @param key:
	 *            configuration key
	 * @return Object instance
	 */
	public Object getObject(String key) {
		Object res = null;
		try {
			Class clazz = Class.forName(cfg.getProperty(key));
			Class[] argsClazz = new Class[0];
			Constructor ctor = clazz.getConstructor(argsClazz);
			res = ctor.newInstance();
		} catch (Exception ex) {
			// AppLogger.log(ex, Level.ERROR);
			logger.error(ex.getMessage());
		}
		return res;
	}

	/**
	 * Create an object instance with 1 string parameter in constructor
	 * 
	 * @param className:
	 *            class name
	 * @return object instance
	 */
	public Object getObjectInstance(String className, String... args) {
		Object res = null;
		try {
			Class clazz = Class.forName(className);

			Class[] argsClazz = new Class[args.length];
			for (int i = 0; i < args.length; i++) {
				argsClazz[i] = args[i] == null ? Null.class : args[i].getClass();
			}

			Constructor ctor = clazz.getConstructor(argsClazz);
			res = ctor.newInstance((Object[]) args);
		} catch (Exception ex) {
//			AppLogger.log(ex, Level.ERROR);
			logger.error(ex.getMessage());
		}
		return res;
	}
}
