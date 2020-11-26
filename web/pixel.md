---
title: pixel
date: 2020-11-17 13:12:40
categories: web
tags: pixel
---

# pixel

## pixel이란?
- pixel은 Picture Element의 [준말](https://dict.naver.com/search.nhn?dicQuery=%EC%A4%80%EB%A7%90&query=%EC%A4%80%EB%A7%90&target=dic&ie=utf8&query_utf=&isOnlyViewEE=)로 한자로 화소(畵素)라고도 한다.

- 뜻을 정의하자면 텔레비젼, 컴퓨터 화면을 구성하는 최소 단위이다.

- 하나의 pixel에는 해당색의 정보가 담겨져있는데 예를 들면 [rgba](https://ko.wikipedia.org/wiki/RGBA_%EC%83%89_%EA%B3%B5%EA%B0%84)값등이 담겨져 있고 그 값들과 pixel은 갯수만큼 파일, 그림의 용량이 결정된다.

- pixel단위를 사용하는 포맷은 대표적으로 [BMP](https://namu.wiki/w/BMP &#40;%ED%99%95%EC%9E%A5%EC%9E%90&#41;), [GIF](https://namu.wiki/w/GIF), [JPEG](https://namu.wiki/w/JPEG), [PNG](https://namu.wiki/w/PNG)포맷이 있다. 이를 비트맵 이미지라고 한다. 연속적인 값으로 그림을 그리는 [벡터](https://namu.wiki/w/%EB%B2%A1%ED%84%B0) 이미지와는 대비되는 성질을 가지고있다.


## pixel의 유래
- pixel의 개념은 사실 컴퓨터보다 먼저 그림에서 유래되었다고 한다. 19세기 후반 조르주 쇠라와 파울 시냐크 등이 그림을 pixel처럼 점으로 찌어서 표현하는 점묘화 기법을 만들었는데 여기서 pixel의 개념이 만들어졌다고 봐도 손색이 없다고 한다. 하지만 이때는 그 점을 일일이 손으로 찍어야하기때문에 생산성과 효율이 많이 떨어졌고 현대에 와서야 점묘화와 비슷한 기법으로 디스플레이에 수많은 점(pixel)들이 일렬로 배치되며 순식간에 그림을 그려내는 방식으로 발전 된 것이다.

## pixel은 절대값인가 상대값인가?
- pixel의 값은 고정값이다. pixel의 갯수만큼 파일, 그림의 용량이 결정된다고 했는데 임의로 pixel수를 설정해주지 않는 이상 환경에 따라 유동적으로 변하지는 않는다.
아마 ppi와 dpi에 의해 pixel이 유동적이라는 말은 실제단위가 있는 요소를 pixel로 변환할때를 말하는것 같다.
만약 10인치 크기의 그림을 300dpi로 스캔한다고 생각하면 3000pixel의 이미지가 생성이 되는것이고 200dpi면 2000pixel의 이미지가 생성되는 의미이다.

## pixel의 크기는 상대적인가 절대적인가?
- 디스플레이에서 출력이 될때는 값은 절대적이지만 보여지는 크기는 상대적으로 변한다. 예를 들어 1920 x 1080(FHD)의 해상도에서 1000px짜리 요소를 띄워놓는다면 화면의 절반을 차지하게끔 보이겠지만 3840 x 2160(4k)해상도에서 같은 1000px짜리 요소를 띄워놓는다면 1/4밖에 차지를 하지 않을것이다. 이렇게 같은 크기를 가진 요소도 실제 값이 변하진 않지만 cm나 inch로 환산했을때 크기는 변할 수 있다는말이다.