# Stargazer

Stargazer lets you store photos from your astronomical viewing events and search for what others have shared locally!

# Installing Core Technologies

ALERT: This app uses mongo for backend which no longer supports 32-bit x86 platforms!

## Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com/download) is Microsoft's cross-platform editor that we'll be using during orientation for writing JavaScript and building Node applications. Make sure you add the [JavaScript extension](https://code.visualstudio.com/Docs/languages/javascript) immediately after installation completes.

Alternatively use the text editor of your choice.

## Install Node.js

https://nodejs.org/en/docs/guides/getting-started-guide/

  1. Click the above link to download Node.  
  https://nodejs.org/en/download/
  2. Make a directory for your app: mkdir HelloWorld
  3. Move to the newly created directory: cd HelloWorld
  4. Create a new file called app.js: 
  5. Paste in the code form the example link at the top of the instructions.
  6. Run the app: node app.js
  7. Navigate to http://localhost:8000/api/v1
  8. You should see your 'Hello World' message.

### Install Node.js via package manager
  It is recommended that you install node via your package manager. The rest of the project is exactly the same as Windows and macOS.
  ## For Ubuntu or Debian Linux Users

```
sudo apt install nodejs
```
### For Fedora Linux Users (Redhat Linux Users: replace dnf with yum)

```
sudo dnf install nodejs
```

### Review Node Documentation

https://nodejs.org/en/docs/

# NPM

Going hand in hand with Nodejs is npm. This package manager allows us to install the needed third party support that empowers modern applications. You can use ```npm -v``` to check if you have it installed otherwise run ```npm install npm@latest -g``` to update to the latest version. While npm installs with node sometimes npm has a newer version than the one that installs with node.

After installing npm use ```npm install``` to install the dependencies for this app.

# Mongo

Again if you missed the alert above mongo no longer supports 32-bit. Assuming you are no using windows 32-bit you can install mongo by going to their website https://docs.mongodb.com/manual/installation/?jmp=footer and following their instructions there or the installation instructions I moved from their site here.

We are using the community version. 

## macOS

If you have homebrew on macOS it's as simple as running ```brew update``` (to ensure the lastest version) then use ```brew install mongodb```.

### Manual Installation

Manually installing is slightly more difficult but if you don't want to use brew first download the latest binaries with ```curl -O https://fastdl.mongodb.org/osx-ssl/mongodb-osx-ssl-x86_64-3.4.10.tgz```. 
<br/><br/>
Then extract them from the archive. You can use ```tar -zxvf mongodb-osx-ssl-x86_64-3.4.10.tgz``` for example.
<br/><br/>
Next copy the extracted archive to the target directory mongodb using ```mkdir -p mongodb```
```cp -R -n mongodb-osx-ssl-x86_64-3.4.10/ mongodb```.
<br/><br/>
Next you can check for the binaries location using ```export PATH=<mongodb-install-directory>/bin:$PATH``` in your shell's rc file (eg. /.bashrc) otherwise they may remain in your bin files of the extracted archive. 
<br/><br/>
Last, replace mongodb-install-directory with the path to the extracted MongoDB archive.

## Windows

Please read the mongo docs if you are using windows 7 or XP https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/.
<br/><br/>
If you are using a later version of windows and don't want to follow that link I'll post what they have here. 
<br/><br/>
Choose MongoDB for Windows 64-bit runs only on Windows Server 2008 R2, Windows 7 64-bit, and newer versions of Windows. This build takes advantage of recent enhancements to the Windows Platform and cannot operate on older versions of Windows.
<br/><br/>
Choose MongoDB for Windows 64-bit Legacy runs on Windows Vista, and Windows Server 2008 and does not include recent performance enhancements.
<br/><br/>
If you are somehow on a computer you don't know which OS is running you can use ```wmic os get caption```
```wmic os get osarchitecture``` to get that information.
<br/><br/>
Next download using this link http://www.mongodb.org/downloads. Additional options exist on MongoDB's site if this does not work for you!

## Linux

I'm hoping to improve my understanding of Linux someday (maybe learn some devOps!) for now I'm going to assume you understand what I'm copying from mongoDB's website. Alternatively you can look at it yourself!
https://docs.mongodb.com/manual/administration/install-on-linux/

Recommended

For the best installation experience, MongoDB provides packages for popular Linux distributions. These packages, which support specific platforms and provide improved performance and TLS/SSL support, are the preferred way to run MongoDB. The following guides detail the installation process for these systems:

1. Install on Red Hat https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/
<br/><br/>
Install MongoDB Community Edition on Red Hat Enterprise and related Linux systems using .rpm packages.
<br/><br/>
2. Install on SUSE https://docs.mongodb.com/manual/tutorial/install-mongodb-on-suse/
<br/><br/>
Install MongoDB Community Edition on SUSE Linux systems using .rpm packages.
<br/><br/>
3. Install on Amazon https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon/
<br/><br/>
Install MongoDB Community Edition on Amazon Linux AMI systems using .rpm packages.
<br/><br/>
4. Install on Ubuntu https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
<br/><br/>
Install MongoDB Community Edition on Ubuntu Linux systems using .deb packages.
<br/><br/>
5. Install on Debian https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/
<br/><br/>
Install MongoDB Community Edition on Debian systems using .deb packages.
<br/><br/>
For systems without supported packages, refer to the Manual Installation tutorial.

### Manual Installation

For Linux systems without supported packages, MongoDB provides a generic Linux release. These versions of MongoDB don’t include TLS/SSL, and may not perform as well as the targeted packages, but are compatible on most contemporary Linux systems. See the following guides for installation:

6. Install From Tarball https://docs.mongodb.com/manual/tutorial/install-mongodb-on-linux/
<br/><br/>
Install MongoDB Community Edition on other Linux systems from MongoDB archives.

# API KEY etc
I've hidden my firebase information if you'd like to work on this project let me know. If you pull down without this info the login page won't have NASA's picture of the day and you may get errors. You can stop these by commenting out code related to firebase and the API factories. I initialized firebase in UserFactory.js.

Relevant files:
<br/><br/>
APIFactory.js
<br/><br/>
UserFactory.js
<br/><br/>
app.js
<br/><br/>
UserController.js