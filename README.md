# Data-Visualization

<br>


[Loading Data with Fetch async & await](https://github.com/BoKyeong-Kim/Data-Visualization/commit/429df0fef397479da53cbe16f50ff95c44d6e439)
- Data loadin하기
- 비동기함수를 사용하여 gist에 업로드해둔 csv파일을 fetch

<br>

[using d3.csvParse function](https://github.com/BoKyeong-Kim/Data-Visualization/commit/94b9bf5529ff586a799a7fba97831c9262e04437)
- d3 import하기
- d3의 csvParse함수를 적용하면 배열의 형태로 parsing된다.

<br>

[using d3.csv and d3.csvFormat function](https://github.com/BoKyeong-Kim/Data-Visualization/commit/6cb8cb9bb432b6acd8ca65e2bb5c2a9601cc965f)
- csvParse 함수 보다 d3.csv를 이용하면 더 간결하게 사용할 수 있다.
- 이미 파싱된 데이터에 또 파싱하지 않아도 된다.


<br>

### refactoring bar chart

각 기능을 컴포넌트로 분리

- AxisBottom
- AxisLeft
- Marks

<br>

### bar chart 스타일 변경

group에 style을 지정해주어, xScale의 축을 연한 회색(#C0C0BB)으로 변경

( [참고](https://github.com/amycesal/dataviz-style-guide/blob/master/Sunlight-StyleGuide-DataViz.pdf) )

<br>

- js 또는 html을 사용하면 title tag로 팝업을 띄울 수 있음 ([참고](https://www.pluralsight.com/guides/create-tooltips-in-d3js))
- 하지만 react에서는 적용이 되지않았음

**⇒ material-ui를 사용하여 [tooltip 컴포넌트](https://material-ui.com/components/tooltips/) 사용**

<br>


### convert TopoJson to GeoJson

- GeoJson : 다양한 지리적 데이터 구조를 인코딩하는 형식
    - Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon의 기하학적 유형을 지원
    - 추가 프로퍼티를 가진 기하학적 객체는 Feature 객체
- TopoJson : GeoJson의 확장형으로 토폴로지를 인코딩
    - 기하학적 구조는 분리되는 대신 arc라는 공유되는 선 세그먼트에서 함께 연결
    - 중복성을 제거하여 관련 기하학적 구조를 동일한 파일에 효율적으로 저장할 수 있도록 함

<br>

[d3-geo](https://observablehq.com/@d3/world-airports?collection=@d3/d3-geo) 사용 

```jsx
const projection = geoEqualEarth();
const path = geoPath(projection);
```

<br>
