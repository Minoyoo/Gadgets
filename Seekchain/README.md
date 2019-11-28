如何搭建SeekChain挖矿程序（Ubuntu 版本）
===================================

## 完整版教程
![教程.gif](./img/Tutorials.gif)



## 分步教程
1. 登录你的 Ubuntu 系统(矿机)


2. 进入 root 用户

```
sudo -i
```


会提示输入密码

3. 更新系统的软件列表

```
apt-get update
```

4. 安装 git 

```
apt-get install git
```

5. 安装 screen

```
apt-get install screen
```

6. 下载 SeekChain 所需的工具包(节点、P盘软件、挖矿程序)

```
git clone https://github.com/rooat/parity-eth.git
```

7. 可以自己改一下文件名

```
mv parity-eth seekchain
```

8. 进入seekchain 文件夹

```
cd seekchain
```

9. 设置钱包密码(建议在此生成一个钱包,然后通过App 钱包绑定这个钱包为代理地址)

```
vim password.txt
```

10. 编辑你自己的钱包密码

>先按键盘 i 键,进入可编辑的状态,修改密码,完成后按键盘左上角 esc 键,退出可编辑状态

>然后输入 :

>最后输入 wq   保存并退出文件 password.txt

11. 生成钱包(钱包密码是刚才输入到 passwo.txt 文件里的密码)

```
chmod +x ./init.sh && ./init.sh
```

12. 请复制并且保存好刚才生成的 PID ,以及 钱包地址 


------

### P盘

在你准备P盘的文件路径下, 新建一个文件夹 plots (假设就在 seekchain 文件夹下)

```
mkdir plots


chmod +x ./engraver && ./engraver -i 你刚刚生成的PID -p "你的plost 文件夹的绝对路径"  -s 0 -n 4096
```

例如:
```

chmod +x ./engraver && ./engraver -i 1434343434434 -p "/root/seekchain/plots"  -s 0 -n 4096  
```

------

13. 修改配置文件 seek_config.toml 

```
vim seek_config.toml 
```

14. 替换里面所有的地址为刚刚我们生成的地址

>先输入 ``` :  ```

>然后输入 ``` %s/0xc47938b79c16a02d54b50693a218b82bf9181b07/你刚刚生成的地址/g ```

>再次输入  ``` : ```

>最后输入 ``` wq ```

15. 新建一个screen 窗口

```
screen 	-R  parity 
```

16. 启动 parity 节点

```
 chmod +x ./start.sh && ./start.sh
```


 17.  切换回原来的终端

```
 按住 ctrl 键 , 再依次按 a 键 , d 键 (ctrl + A + D)
```

 18. 修改配置文件 config.yaml

```
vim config.yaml
```

19. 依次替换PID 和 地址

>先输入 ``` : ```

>然后输入  ``` %s/14966090477137598561/你刚刚生成的PID/g ```

>再次输入  ``` : ```

>然后输入  ``` %s/0xfafd59483af0f9abf611fc0dcfb23bfec6249861/你刚刚生成的地址/g ```

>再次输入  ``` : ```

>最后输入  ``` wq```


20. 修改 P 盘文件路径,例如我们刚生成的p 盘路径是 ``` /root/seekchain/plots  ```


21. 新建一个screen 窗口

```
screen -R mining
```

22. 启动挖矿程序

```
chmod +x ./miner.sh && ./miner.sh
```


