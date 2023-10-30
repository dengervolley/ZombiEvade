# ZombiEvade
Game for hackathon

How to start the game

Firstly, you can follow the link to play the game online:
If you need to run the game locally, then follow the tips below:
1. Download all files from the repository to a folder on your computer.
2. Install Python. If you use Linux or Mac OS X, everything is already ready on your system. If you are a Windows user, you can download the installation file from the Python home page:
- Go to python.org -> download section -> select the link for Python.
- At the bottom of the page, select Windows x86 executable installer and download it. After downloading the file, run it.
- On the first page of the installer, select the "Add Python 3.xxx to PATH" checkbox.
- Click Install, then click Close when the installation is complete.
3. Open Command Prompt (Windows)/(OS X/Linux). To verify your Python installation, enter the following command:
python -V
4. The system will return you the version number of the installed program. If the python -V command is successful, you need to go to the directory with your project using the cd command:
include the directory name to enter it, for example
cd Desktop
5. Enter the command to start the server in that directory:
python -m http.server
6. By default, this will cause the contents of the directory to run on the local web server on port 8000. You can get to this server by going to the localhost:8000 URL in your web browser. Here you will see a running game that you can play!
