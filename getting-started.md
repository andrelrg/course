# First of all

## Preparation
To follow this course you will need to take some steps first:
1. Create your github account: https://github.com/
2. Make sure you are using Linux [here](#linux)
3. Link your github accont to your Linux [here](#ssh)
4. Create a repository in your github
5. Clone the repository to your terminal [here](#repo)

## Linux 

In my tutorials I'll be using Ubuntu, so if you are not using some unix based OS (famous Windows) take these steps before we start, else, just continue.

>**This tutorial can be followed here:** https://code.visualstudio.com/docs/remote/wsl-tutorial

### Install Windows Subsystem for Linux <a name="linux"></a>

 - In the windows bar type `features`
 - Give a check on `Windows Subsystem for Linux`
 - Make sure it worked executing `wsl` in the command promt
 - The install Ubuntu in the `Microsoft Store`
 - After doing this, the `wsl` command should show you our precious Terminal

### Install Visual Studio Code
- https://code.visualstudio.com/download

### Integrate with the WSL
- To this you'll need this extension.
- https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl
- After installing this, restart you wls
- You should now be able to open VSCode on widows via WLS with the command `code .` (go to the directory that you want first)

### Directories
Inside the WLS you'll be able to see Widowns directories inside `/mnt/c`. Also, there is a problem with the file permissions integrations, so, to use git from wsl terminal you'll need to do this in the terminal:
```shell 
sudo umount /mnt/c
sudo mount -t drvfs C: /mnt/c -o metadata
```

### Done!
Now everytime I say *terminal*, you know that I am talking about your WLS!  

## Link Github in Linux <a name="ssh"></a>
We'll be doing a [SSH](https://en.wikipedia.org/wiki/SSH_(Secure_Shell)) link from your computer to your github, so you can control your repositories in a mor efficient way.

- In your Terminal execute the command: 
```shell 
ssh-keygen
```
You can continue in the porpoused directory, and chose a password if you think it's necessary, but it's not required, you can just press enter.

- Now go to to your github [settings](https://github.com/settings)
- Follow to `SSH and GPG Keys`
- New SSH Key
- Open terminal again and type:
```shell
cat ~/.ssh/id_rsa.pub
```
**Note: Do not share the result of this command with no one**
- Copy it and paste in the key field, the title you can put something that identify your computer.
- There is a possibility that you need to start and add your ssh key to ssh agent, like this:
```shell 
eval `ssh-agent -s`
ssh-add ~/.ssh/id_rsa
```
- Done!

## Cloning the repository <a name="repo"></a>
If you are not used to linux commands, don't panic, here is a [link](https://www.hostinger.com/tutorials/linux-commands) that will help you. You don't need to memorize all commands, use it to consult only.

- Click the button `\/Code` in the repository's page.
- Chose the ssh option and copy it.
- Create the directory you want to be yout project's directory, I always create a `projects` dir. ****If you are using WLS remmember to go to `/mnt/c` first*** 
```shell
mkdir projects
cd projects
``` 

