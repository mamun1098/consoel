
### Sage Installation

## Mac or Linux users

# Installing Acorn with Composer
    $ composer require roots/acorn

# Globally install Yarn
    $ npm install --global yarn

Install Sage using Composer from your WordPress themes directory (replace your-theme-name below with the name of your theme):


## Windows users

WSL is required in order to use Sage. Build commands must be ran from a  <a href="https://docs.microsoft.com/en-us/windows/wsl/">WSL environment</a>


## Using WSL (Windows Subsystem for Linux), you can install Sage using the following command:

1. $ sudo apt install composer yarn
2. $ composer create-project roots/sage your-theme-name

## Run yarn from the theme directory to install dependencies
 3.  $ npm install 
 4.  $ yarn install
 5.  $ yarn build 

## Installing Acorn
 6.  $ composer require roots/acorn

## We also recommend adding Acorn's postAutoloadDump function to Composer's post-autoload-dump event in the scripts section of composer.json:

"scripts": {
  //...
  "post-autoload-dump": [
    "Roots\\Acorn\\ComposerScripts::postAutoloadDump"
  ]
}



