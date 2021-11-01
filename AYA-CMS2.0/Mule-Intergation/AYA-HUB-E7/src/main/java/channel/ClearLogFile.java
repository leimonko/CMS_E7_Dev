package channel;

import java.io.File;
import java.io.FileFilter;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class ClearLogFile {
	/*
	 * Function get Day before today Input: (n) days : Integer Output: The day
	 * before after minus n days
	 */
	private static String getDateBefore(int daysAgo) {
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("ddMMyyyy");
		LocalDate date = LocalDate.now().minusDays(daysAgo);
		System.out.println("CleanLogFile.getDateBefore: The day before " + daysAgo + " day(s) is " + date.format(dtf));
		return date.format(dtf);

	}

	public static void ClearLogAction(int dayMoving, int dayDelete) {
		DeleteLogFile(dayDelete);
		moveFile(dayMoving);
	}

	// Delete the file 6 months ago
	public static void DeleteLogFile(int dayDelete) {
		System.out.println("======================================================================");
		System.out.println("DELETING LOG FILE...............");
		try {
			String day = getDateBefore(dayDelete); // get date of 180 days ago
			String filePattern = "HUB2.0-" + day;
			File directiory = new File("../logs/HUB2.0Logfile-Old/");
			File[] listFile = directiory.listFiles(new FileFilter() {
				@Override
				public boolean accept(File f) {
					return f.getName().contains(filePattern);
				}
			});

			if (listFile != null && listFile.length != 0) {

				for (File file : listFile) {
					if (file.exists() && !file.isDirectory())
						if (file.delete()) {
							System.out.println("CleanLogFile.DeleteLogFile: Delete success " + file.getName());
						} else {
							System.out.println("CleanLogFile.DeleteLogFile: Failed to delete " + file.getName());
						}
				}
				System.out.println("=>CleanLogFile.DeleteLogFile: Delete " + listFile.length + "successfully");
			} else
				System.out.println("=>CleanLogFile.DeleteLogFile: On " + day + " Not have file to Delete");

		} catch (Exception e) {
			System.out.println("=>CleanLogFile.DeleteLogFile: Delete error with Exception: " + e.getMessage());

		}
		System.out.println("======================================================================");

	}

	// Move the file 30 days ago to another folder
	public static void moveFile(int dayMoving) {
		System.out.println("======================================================================");
		System.out.println("MOVING LOG FILE...............");
		try {

			String day = getDateBefore(dayMoving); // get date of 30 days ago
			String filePattern = "HUB2.0-" + day;
			File destinationFolder = new File("../logs/HUB2.0Logfile-Old");
			File sourceFolder = new File("../logs/HUB2.0Logfile");
			// Create folder Backup if not exist
			if (!destinationFolder.exists()) {
				destinationFolder.mkdirs();
			}
			if (sourceFolder.exists() && sourceFolder.isDirectory()) {
				// Get list of the files and iterate over them
				File[] listOfFiles = sourceFolder.listFiles(new FileFilter() {
					@Override
					public boolean accept(File f) {
						return f.getName().contains(filePattern);
					}
				});

				if (listOfFiles != null && listOfFiles.length != 0) {
					for (File file : listOfFiles) {
						// Move file to destination folder

						try {
							if (file.renameTo(new File(destinationFolder + "/" + file.getName())))
								System.out.println("CleanLogFile.moveFile: Move File: " + file.getName() + " Success");
							else
								System.out.println("CleanLogFile.moveFile: Move File: " + file.getName() + " Failed");
						} catch (Exception e) {
							System.out.println("CleanLogFile.moveFile: Move File: " + file.getName()
									+ " Failed with Error:" + e.getMessage());

						}
						System.out.println(
								"=>CleanLogFile.moveFile: Move file " + day + " to backup folder successfully");
					}

				} else
					System.out.println("=>CleanLogFile.moveFile: On " + day + " not have file to move!");

			} else {
				System.out.println("=>CleanLogFile.moveFile: " + sourceFolder.getName() + " folder does not exists!");

			}
		} catch (Exception e) {
			System.out.println("=>CleanLogFile.moveFile: Move File error with Exception: " + e.getMessage());

		}
		System.out.println("======================================================================");
	}
}
