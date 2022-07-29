import React from "react";
import { render } from "react-dom";

// const element = React.createElement("h1", {
//   className: "zag"
// }, "Yo!1");

// const root = document.querySelector("#root");

// //render(элемент, контейнер).
// //Нельзя менять содержимое контейнера другим джаваскриптом в обход реакта.
// //Для рендера всего реакт-приложения обычно используется один контейнер.
// render(element, root);






// JSX-код выглядит один в один как HTML, хоть и совсем им не является:

// const root = document.querySelector("#root");
// render(<h1>Hello World</h1>, root);

// HTML прощает отсутствие кавычек вокруг значений атрибутов, в JSX же кавычки строго обязательны.
// Кавычки в JSX обязательны даже тогда, когда значением является число, а не строка.
// использование стандартного для джаваскрипта кэмел-кейса в названиях атрибутов (напр. tabIndex место tabindex).

// className!

const link = <li id="home" className="default">🏠</li>;

// в JSX не нужно подставлять знак доллара.
let gimmeFive = () => "five";
const greet = <em>High {gimmeFive()}!</em>

const root = document.querySelector("#root");
render(link, root);


const list = React.createElement("ul", null,
  React.createElement("li", null, "One"),
  React.createElement("li", null, "Two"),
  React.createElement("li", null, "Three")
);

// если значение является строкой — оборачиваем его в кавычки; если значение динамическое (результат оценки выражения) — используем фигурные скобки.
// const element = <div tabIndex={count}></div>;

// const button = <button className={`${clickable} ${active}`}>Buy</button>;

// лучше всегда заключать JSX в круглые скобки,  чтобы обойти автоматическую точку с запятой 
const getList = () => {
  return (
    <ul>
      <li>One</li>
      <li>Two</li>
    </ul>
  );
}

// обязвтельное закрытие тега
function showAvatar(url) { 
  return <img src={url} />;
}

// Фрагментом
// в JSX называется пустой тег <></>, который не имеет смысла с точки зрения HTML, но в JSX выполняет очень важную задачу, а именно позволяет возвращать несколько элементов сразу.
// В JSX мы можем возвращать лишь 1 элемент за раз. 
// Преимущество JSX-фрагмента перед оберткой в виде условного <div> заключается в том, что див отрендерится в финальный HTML, а фрагмент просто бесследно растворится как биоразлагаемый пластик.

function deliveryPopup() {
  return (
    <>
      <h1>Доставка продуктов</h1>
      <h2>Оформить заказ</h2>
    </>
  );
}




