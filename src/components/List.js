import React from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {articles: state.articles};
}

function ConnectedList(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {props
          .articles
          .map(article => <tr key={article.id}>
            <td>{article.id}</td>
            <td>{article.title}</td>
          </tr>)}
      </tbody>
    </table>
  );
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;