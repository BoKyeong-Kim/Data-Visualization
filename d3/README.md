# D3
- Data
- Driven
- Document

→ 웹브라우저 상에서 동적, 시각화를 구현하기 위한 자바스크립트 라이브러리


<br>


### html에서 d3 사용하기

- html 파일에 d3 src추가

```html
<html>
    <head>
        <script src="[http://d3js.org/d3.v3.min.js](http://d3js.org/d3.v3.min.js)"></script>
    <head/>
<html/>
```

<br>


- `select` : 선택한다는 뜻 (대부분 `append` 와 함께 사용된다.)
- `append` : 자식요소 추가
- `attr` : 해당 태그의 속성 추가(높이, 넓이, 색상 등)

```html
d3.select("body")
		.append("svg")
		.attr("width", 500)
```


<br>