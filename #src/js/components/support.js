import { STATE_LIST } from '../data/values';

class InteractiveChatbox {
    constructor(a, b, c) {
        this.args = {
            button: a,
            chatbox: b
        }
        this.icons = c;
        this.state = false;
    }

    display() {
        const { button, chatbox } = this.args;
        button.addEventListener('click', () => this.toggleState(chatbox))
    }

    toggleState(chatbox) {
        this.state = !this.state;
        this.showOrHideChatBox(chatbox, this.args.button);
    }

    showOrHideChatBox(chatbox, button) {
        if (this.state) {
            chatbox.classList.add(STATE_LIST.active)
            this.toggleIcon(true, button);
        } else if (!this.state) {
            chatbox.classList.remove(STATE_LIST.active)
            this.toggleIcon(false, button);
        }
    }

    toggleIcon(state, button) {
        const { isClicked, isNotClicked } = this.icons;
        if (state) button.innerHTML = isClicked;
        else if (!state) button.innerHTML = isNotClicked;
    }
}

const chatButton = document.querySelector('#chatbox-btn');
const chatContent = document.querySelector('.chatbox-window');
const icons = {
    isClicked: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7144 13.7144L50.2858 50.2858" /><path d="M50.2858 13.7144L13.7144 50.2858" /></svg>',
    isNotClicked: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7144 18.2856H50.2858"/><path d="M13.7144 29.7144H50.2858"/><path d="M13.7144 41.1428H50.2858"/><path d="M59.4287 59.4287L45.7144 54.8572H15.0401C12.2637 54.8572 9.60095 53.7543 7.63771 51.7911C5.67447 49.8278 4.57153 47.1651 4.57153 44.3887V15.0401C4.57153 12.2637 5.67447 9.60095 7.63771 7.63771C9.60095 5.67447 12.2637 4.57153 15.0401 4.57153H48.9601C51.7365 4.57153 54.3993 5.67447 56.3625 7.63771C58.3257 9.60095 59.4287 12.2637 59.4287 15.0401V59.4287Z" stroke-width="3" stroke-miterlimit="5"/></svg>',
}

if (chatButton && chatContent) {
    const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
    chatbox.display();
    chatbox.toggleIcon(false, chatButton);
}
