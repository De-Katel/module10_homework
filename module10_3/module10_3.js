const wsUri = "wss://echo-ws-service.herokuapp.com";

const chatScreen = document.getElementById('output');

let websocket;

function wsStart() {

    websocket = new WebSocket(wsUri);

    websocket.onclose = () => {

        console.log('Разрыв связи');

        wsStart();
    }
}

wsStart();

send.onclick = () => {

    if (document.getElementById('textMessage').value) {

        const userMessage = document.getElementById('textMessage').value;

        chatScreen.insertAdjacentHTML('beforeend', `<div class="user-message">Вы: ${userMessage}</div>`);

        websocket.send(userMessage);

        document.getElementById('textMessage').value = '';

        websocket.onmessage = (evt) => {

            chatScreen.insertAdjacentHTML('beforeend', `<div class="server-message">Сервер: ${evt.data}</div>`);
        };

    }
}

function showMapLink(position) {

    if (!navigator.geolocation) {

        error();
        
    } else {

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        websocket.send(position);

        websocket.onmessage = null;

        chatScreen.insertAdjacentHTML(

            'beforeend',
            `<a class="user-message" href = 'https://www.openstreetmap.org/#map=12/${latitude}/${longitude}' target = '_blank'> Ваша геолокация</a>`
        );
    }
}

function error() {

    chatScreen.insertAdjacentHTML('beforeend',
        `<div class="user-message"> Невозможно получить данные</div>`
    );
}

geolocation.onclick = () => {

    navigator.geolocation.getCurrentPosition(showMapLink, error);
}