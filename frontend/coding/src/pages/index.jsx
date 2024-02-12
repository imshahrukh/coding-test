import React, { useEffect, useState } from 'react';
import { sanitize } from 'dompurify';
import { fetchMessages, fetchUsers } from '../service/apiService';

const UserDetails = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const messagesData = await fetchMessages();
        const usersData = await fetchUsers();
        setMessages(messagesData);
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {users.length && messages.length ? <div>
      <h1>Echo Messages for Chat ID = 3 Here as HTML</h1>
      <div>
        {messages.map((message) =>
          message.chatid === 3 && <div key={message.id}>{sanitize(message.message)}</div>
        )}
      </div>

      <h1>Render Messages for Chat ID = 8 Here as JSON</h1>
      <div>{JSON.stringify(messages.filter((message) => message.chatid === 8))}</div>

      <h1>Render User ID = 100 Here as JSON</h1>
      <div>{JSON.stringify(users.find((user) => user.id === 100))}</div>

      <h1>Echo Message ID = 459 Here as HTML</h1>
      <div>
        {messages.find((message) => message.id === 459) && (
          <div>{sanitize(messages.find((message) => message.id === 459).message)}</div>
        )}
      </div>
    </div>: <>Loading ...</>}
    </>
  );
};

export default UserDetails;
