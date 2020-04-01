# TWMC-REACT-COMPONENTS
ReactJS를 활용한 web-components 개발

## Component 추가 방법
### 1. 컴포넌트 추가
> 실제 컴포넌트를 구성하는 코드의 집합입니다.
- `components/<COMPONENT_NAME>/index.js`
- `components/index.js` 에 해당 컴포넌트를 연결하는 코드를 추가합니다.
    ```javascript
        import Button from "./Button";
        import TextInput from "./TextInput";

        export {Button, TextInput}; 
    ```

### 2. 보드 추가
> 컴포넌트 활용 예시를 보여주는 공간입니다.
- `boards/<COMPONENT_NAME>.js`
- 컴포넌트의 `props` 사용에 따른 결과를 대시보드에 표현합니다.
- 위와 동일하게 `boards/index.js` 에 해당 보드를 연결하는 코드를 추가합니다.
    ```javascript
        import ButtonBoard from './Button';
        import TextInputBoard from './TextInput';

        export {ButtonBoard, TextInputBoard};
    ```

### 3. 라우터 추가
> 좌측 메뉴와 컴포넌트 보드를 연결하는 라우터를 생성합니다.
- 좌측 메뉴에서 컴포넌트명을 클릭하면 우측 보드에 컴포넌트를 출력할 수 있도록 합니다.

    1. 라우터 생성
        - `routes/index.js`
        - `path`와 그에 해당하는 `component`를 라우터에 입력합니다.
        - ```html
            <Route exact path="/" component={Overview} />
            <Route path="/button" component={ButtonBoard} />
            <Route path="/text-input" component={TextInputBoard} />
            ```
    2. 좌측 메뉴에 컴포넌트 추가
        - `components/Sidebar.js`
        - `<RouteButton />`의 `to`에 위의 `path`를 연결하고 컴포넌트명을 입력합니다.
        - ```html
            <h2>Component list</h2>
            <RouteButton to="/">Overview</RouteButton>
            <RouteButton to="/button">Button</RouteButton>
            <RouteButton to="/text-input">TextInput</RouteButton>
            ```