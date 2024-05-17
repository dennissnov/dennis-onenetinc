<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dennis-onenetinc' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'yUMf`~aW8&(hB2JX99(a-+S6<]*wT>a/yrtm5&*lgy%UUZnbS1~WRkr;8NOB^BwD' );
define( 'SECURE_AUTH_KEY',  '3(P,zvg3o8u%@rp:-B6zj/>Riq$]YOqtY)d=>SJ,T8Bk5O5D|dyF~jl/ihY..s&>' );
define( 'LOGGED_IN_KEY',    '#(O9>[K#oFW-TaSXujZ`_T|oGrplwfhZc/A8QrkD.0}KO)<l|2%1^79wjP{f(8Ql' );
define( 'NONCE_KEY',        '^U3LmINl6)YWuYFS]xAjON~EhObWQnwL0Tx{5%4@#q<Qf@ip#wPK}(*7=AOTzCWC' );
define( 'AUTH_SALT',        '{x01,&#s/$fw0!P%U9?c]jYbZ4=9j0N_QlB>f&l5R cnVI:^ogf~c%<6Zdgl vAx' );
define( 'SECURE_AUTH_SALT', 'Xp;mb(Z>D$`J@C)r@R45T@{NH&/d2!}^?IE[2<_dA~ce?~>J<GxfzmcOwb8N9}&b' );
define( 'LOGGED_IN_SALT',   'p,Q^+ptt[yn0vdlRm?ouWdE|m%gP+`PK{*avs*odqFItc{3VJEIh3Aii-L_$WMJ ' );
define( 'NONCE_SALT',       'Vxr+ml?D)j5%&T=)%(PMjTXy6d3![`&,Q,,WNes#ahBbrT-6$hGSHAdml;MxCI[S' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
