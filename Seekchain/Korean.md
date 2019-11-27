시크체인 솔로 마이닝 튜터리얼（Ubuntu 버전）
===================================

## 튜터리얼
![튜터리얼.gif](./img/Tutorials.gif)



## 단계별 튜터리얼
1. ubuntu시스템(채굴기)으로 로그인합니다.


2. root 사용자로 로그인합니다.

```
sudo -i
```


비번 입력하라는 게시글이 있습니다.

3. 시스템에 있는 프로그램의 리스트를 업데이트합니다.

```
apt-get update
```

4. Git 설치합니다. 

```
apt-get install git
```

5. Screen 설치합니다.

```
apt-get install screen
```

6. 시크체인의 마이닝과 플로팅 공구를 다운로드 받습니다 (노드, 플로팅 프로그램, 마이닝 프로그램).

```
git clone https://github.com/rooat/parity-eth.git
```

7. 파일 이름을 바꿔 줍니다.

```
mv parity-eth seekchain
```

8. seekchain 풀더로 들어갑니다.

```
cd seekchain
```

9. 지갑 비번을 설정합니다.(여기서 아이디와 계정을 만들기를 추천해 드립니다. 그 다음에 휴대폰 앱 지갑을 통해 방금 생성한 계정을 대리계정으로 연동시켜줍니다.)

```
vim password.txt
```

10. 해당 비번 파일을 편집합니다.

>영문자 “i” 를 클릭하여 편집 상태로 들어갑니다.비번을 수정한 다음에 ESC버튼을 클릭하여 편집 상태에서 나옵니다.

>그 다음에 콜론 ”:” 을 입력하고 나서

>영문자 “wq” 를 입력하여 편집된 파일을 저장합니다.

11. 지갑 계정을 만듭니다. (지갑 비번은 방금 편집한 password.txt파일에 있는 내용입니다.)

```
chmod +x ./init.sh && ./init.sh
```

12. 방금 생성된 PID와 지갑 주소를 복사하여 잘 보관해 주세요.


------

###플로팅 단계

플로팅할 풀더 안에 새 폴더 plots를 만듭니다.(seekchain 풀더 안에 진행한다고 가정합니다)

```
mkdir plots


chmod +x ./engraver && ./engraver -i 방금 생성한 PID -p "plots 풀더의 위치"  -s 0 -n 4096
```

例如:
```

chmod +x ./engraver && ./engraver -i 1434343434434 -p "/root/seekchain/plots"  -s 0 -n 4096  
```

------

13. 배치 파일 seek_config.toml을 수정합니다.

```
vim seek_config.toml 
```

14. 그 안에 있는 모든 주소를 방금 생성한 주소로 바꿔줍니다.

>콜론 ``` :  ```을 먼저 입력합니다.

> ``` %s/0xc47938b79c16a02d54b50693a218b82bf9181b07/방금 생성한 주소/g ```입력합니다.

>콜론  ``` : ```을 다시 입력합니다.

>영문자 ``` wq ```를 다시 입력합니다.

15. Screen 명령창을 새로 만듭니다.

```
screen 	-R  parity 
```

16. parity 노드를 작동시킵니다.

```
 chmod +x ./start.sh && ./start.sh
```


 17.  원래 터니널 콘솔로 돌아갑니다.

```
 ctrl + A + D버튼을 클릭합니다.
```

 18. 배치파일 config.yaml을 수정합니다.

```
vim config.yaml
```

19. PID와 주소를 바꿔줍니다.

>콜론 ``` : ```을 먼저 입력합니다.

>``` %s/14966090477137598561/방금 생성한 PID/g ```입력합니다.

>콜론  ``` : ```을 다시 입력합니다.

>``` %s/0xfafd59483af0f9abf611fc0dcfb23bfec6249861/방금 생성한 주소/g ```입력합니다.

>콜론  ``` : ```을 다시 입력합니다.

>영문자 ``` wq```를 입력하여 저장합니다.


20. 플로팅 파일의 위치를 수정합니다, 예를 들어서 방금 생성한 플로팅 파일의 위치는 ``` /root/seekchain/plots  ```입니다.


21. Screen 명령창을 새로 만듭니다.

```
screen -R mining
```

22. 마이닝 프로그램을 작동시킵니다.

```
chmod +x ./miner.sh && ./miner.sh
```


