import React,{ useEffect, useState } from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MessageItem from './MessageItem';
import { messagesRef } from '../firebase';

const useStyles = makeStyles({
    root:{
        gridRow: 1,
        width: '100%',
        overflow: 'auto',
    },
});

const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        messagesRef
        .orderByKey()
        .limitToLast(15)
        .on('value', (snapshot) => {
            const messsages = snapshot.val();
            if (messages === null) return;
            const entries = Object.entries(messsages);
            const newMessages = entries.map((entry) => {
                // １行でまとめる
                const [key, nameAndText] = entry;
                // const key = entry[0];
                // const nameAndText = entry[1];
                return { key, ...nameAndText };
            });
            console.log(newMessages);
            setMessages(newMessages);
        });
    }, []);

    const length = messages.length;

    return (
    <List className={classes.root}>
        {messages.map(({ key, name, text }, index) => {
            const isLastItem = length === index + 1;

            return <MessageItem key={key} name={name} text={text} isLastItem={isLastItem} />;
        })}
    </List>
    );
};

export default MessageList;