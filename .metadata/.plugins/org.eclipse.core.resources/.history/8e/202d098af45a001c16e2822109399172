package com.revature.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.postgresql.Driver;

public class JDBCUtility {
	
	public static Connection getConnection() throws SQLException {
//		String url = System.getenv("db_url");
//		String username = System.getenv("db_");
//		String password = System.getenv("db_password");
		
		String url = "jdbc:postgresql://localhost:5432/postgres";
		String username = "postgres";
		String password = "0911";

		Driver postgresDriver = new Driver();		
		DriverManager.registerDriver(postgresDriver);

		Connection con = DriverManager.getConnection(url, username, password);
		
		return con;
	}
	
}