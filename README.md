<h2 align="center">Sage Installation</h2>

## Mac or Linux users

### Installing Acorn with Composer
    $ composer require roots/acorn

### Globally install Yarn
    $ npm install --global yarn

#### Install Sage using Composer from your WordPress themes directory (replace your-theme-name below with the name of your theme):
    $ composer create-project roots/sage your-theme-name

#### To install the latest development version of Sage, add dev-main to the end of the command:
    $ composer create-project roots/sage your-theme-name dev-main

## Build assets
#### You must build theme assets in order to access your site. Failing to build the assets will result in the error:
    The manifest [/path/to/sage/public/manifest.json] cannot be found.

## Running the first build
- Run yarn from the theme directory to install dependencies
- Update bud.config.js with your local dev URL
- yarn build — Compile assets





# Windows users

WSL is required in order to use Sage. Build commands must be ran from a  <a href="https://docs.microsoft.com/en-us/windows/wsl/">WSL environment</a>


#### Using WSL (Windows Subsystem for Linux), you can install Sage using the following command:

    $ sudo apt install composer yarn

    $ composer create-project roots/sage your-theme-name

## Run yarn from the theme directory to install dependencies

    $ npm install 

    $ yarn install
    
    $ yarn build 

## Installing Acorn

    $ composer require roots/acorn

#### We also recommend adding Acorn's postAutoloadDump function to Composer's post-autoload-dump event in the scripts section of composer.json:

"scripts": {
  //...
  "post-autoload-dump": [
    "Roots\\Acorn\\ComposerScripts::postAutoloadDump"
  ]
}



