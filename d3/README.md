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

### SVG (Scalable Vector Graphics)

- 확장 가능한 벡터 그래픽 → 그래픽을 마크업하기위한 특수 언어
    - 원, 선, 다각형 등 ([참고](https://www.w3schools.com/graphics/svg_intro.asp))

<br>

### Scales

- `svg` 의 크기를 고정으로 하였을 때, 자식 요소들이 그 크기를 초과하면 데이터가 정확하게 표시되지 않음
    - 그때 사용하는것이 Scale
- 어떤 범위의 숫자를 다른범위의 숫자로 변경해주는 역할 → 0~10 까지 표현할 수 있다면 0부터 1000까지 있는 데이터 중에 100이라면 1과 매칭

```html
d3.scale().linear.domain([0, 1000]).range([0, 10])
```

- `domain` : 배열 하나를 인자로 받음 → 표현하고자하는 실제 데이터 범위를 기재
- `range` : 배열 하나를 인자로 받음 → 표현가능한 데이터의 범위를 기재

<br>

### group

- `svg` 의 태그인 `<g>` 로 `svg` 요소들을 묶을 수 있음
    - `g` 태그를 `append`시키고 `translate` 를 통해 이동

```html
d3.select("body")
		.append("svg")
		.attr("width", 500)
		.append("g")
		.attr("transform", "translate(0, 20)");
```

<br>


### axis

- `axis` 는 d3에서 제공하는 축
- `svg` 에 `axis` 를 그리고 `scale` 을 넘겨주면 적당한 간격으로 축 생성
- `ticks()` 를 이용하여 간격 설정 가능
- `call` 로 axis를 인자로 받아 위치를 지정하여 그릴 수 있음

console에서 아래의 코드를 추가하게되면 200*200크기의 svg내에 반지름이 25인 원의 위치는 x=50, y=50에 위치한 그림이 보여진다.

```html
d3.select("body")
		.append("svg")
		.attr("width", 200)
		.attr("height", 200)
		.append("circle")
		.attr("cx", 50)
		.attr("cy", 50)
		.attr("r", 25)
		.style("fill", "purple");
```

