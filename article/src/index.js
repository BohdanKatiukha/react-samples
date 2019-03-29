import React, {Component} from 'react';
import { render } from 'react-dom'


class Article extends Component{

    article = {
        name: 'ReactJS — это JаvaScript библиотека',
        text: 'ReactJS — это JаvaScript библиотека для построения пользовательских интерфейсов. Это не MVC фреймворк. К ней можно применить только V из этой аббревиатуры. Такая узкая сфера применения дает свободу использования React в различных системах в комбинации с другими библиотеками.',
        author: 'Shevchenko Andriy'
    }

    render (){
        return (
            <div>
                <h2>{this.article.name}</h2>
                <p>{this.article.text}</p>
                <h4>{this.article.author}</h4>
            </div>
        )
    }

}

render(<Article />, document.getElementById('root'));