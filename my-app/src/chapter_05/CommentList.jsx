import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '황성원',
    content: '안녕하세요, 황성원입니다.',
  },
  {
    name: '황성원',
    content: '두번째 코멘트입니다. 리액트 재미있네요.',
  },
  {
    name: 'admin',
    content: '댓글 테스트입니다.',
  },
];
function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment name={comment.name} comment={comment.content} />
      ))}
    </div>
  );
}

export default CommentList;
