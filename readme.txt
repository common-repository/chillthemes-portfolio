=== ChillThemes Portfolio ===
Contributors: chillthemes
Tags: chillthemes, portfolio, post-type, taxonomies
Requires at least: 3.0
Tested up to: 3.6
Stable tag: 1.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Enables a portfolio post type for use in any of our Chill Themes.

== Description ==

This plugin provides you with a new post type aptly named **Portfolio** and two new taxonomies; **Roles** and **Types** to use with any theme you want, obviously it was created for use in our themes.

== Installation ==

= Using The WordPress Plugin Upload =

1. Log in and navigate to Plugins &rarr; Add New.
2. Type **ChillThemes Portfolio** into the Search input and click the **Search Plugin** button.
3. Locate the **ChillThemes Portfolio** in the list of search results and click the **Install Now** button.
4. Click the **Activate Plugin** link at the bottom of the install screen.

= Using FTP =

1. Download the **ChillThemes Portfolio** plugin from WordPress.org.
2. Unzip the package and move it to your plugins directory.
3. Log into WordPress and navigate to the **Plugins** screen.
4. Locate **ChillThemes Portfolio** in the list of available plugins and click the **Activate** link.

== Frequently Asked Questions ==

= Will this work with any WordPress theme? =

Yes it will. This plugin will provide you with all you need to setup a portfolio using WordPress. You'll just have to provide the post type archive, taxonomy, single portfolio, and portfolio page templates.

= Is there a widget to go along with this plugin? =

Yes, there certainly is! If you install and activate our <a href="http://wordpress.org/plugins/chillthemes-widgets">ChillThemes Widgets</a> plugin along with this one, you'll see a new widget aptly titled **Portfolio**.

= I'm getting 404 errors, what do I do? =

All you need to do is visit the Settings -> Permalinks page to flush the rewrite rules, you don't have to make any changes, just visiting this page will do.

= Are there filters? =

Yes! Here's a list of available filters:

1. 'apply_filters( 'chillthemes_portfolio', 'portfolio' );'
2. 'apply_filters( 'chillthemes_portfolio_args', $portfolio_args );'
3. 'apply_filters( 'chillthemes_portfolio_role_taxonomy', 'role' );'
4. 'apply_filters( 'chillthemes_portfolio_project', 'portfolio' );'
5. 'apply_filters( 'chillthemes_portfolio_role_taxonomy_args', $role_args );'
6. 'apply_filters( 'chillthemes_portfolio_type_taxonomy', 'type' );'
7. 'apply_filters( 'chillthemes_portfolio_project', 'portfolio' );'
8. 'apply_filters( 'chillthemes_portfolio_type_taxonomy_args', $type_args );'

== Changelog ==

= 1.2 =
* Changed the portfolio slug from "portfolio/item" to "portfolio".

= 1.1 =
* Added AJAX portfolio sorting in the admin.

= 1.0 =
* Fresh out of the oven, careful it's hot.