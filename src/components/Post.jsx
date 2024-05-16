/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { useState } from 'react'


export function Post({author, content, publishedAt}) {

    const [comments, setComments] = useState([
        'Este é um belo de um comentário👌',
    ])
    const [newCommentText, setNewCommentText] = useState('')


    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h' ", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })


    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                     {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map(list => {
                        if (list.type === 'paragraph') {
                            return  <p>{list.content}</p>
                        } else if (list.type === 'link') {
                            return <p><a href="#">{list.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea
                name='comment'
                value={newCommentText}
                placeholder='Deixe seu comentário'
                onChange={handleNewCommentChange}
                />

                <footer>
                <button type='submit'>Publicar</button>
                </footer>              
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return <Comment content={comment}/>
                    })
                }
            </div>
        </article>
    )
}