const { createApp } = Vue;

    createApp({
        data() {
            return {
                activeChat: 0,
                newMessage: "",
                searchString: "",
                contacts: [
                    {
                        name: 'Michele',
                        avatar: '_1',
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Hai portato a spasso il cane?',
                                status: 'sent',
                                visible: false,
                                clicked: false,
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di stendere i panni',
                                status: 'sent',
                                visible: false,
                                clicked: false,
                            },
                            {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received',
                                visible: false,
                                clicked: false
                            }
                        ],
                    },
                    {
                        name: 'Fabio',
                        avatar: '_2',
                        messages: [
                            {
                                date: '20/03/2020 16:30:00',
                                message: 'Ciao come stai?',
                                status: 'sent',
                                visible: false,
                                clicked: false
                            },
                            {
                                date: '20/03/2020 16:30:55',
                                message: 'Bene grazie! Stasera ci vediamo?',
                                status: 'received',
                                visible: false,
                                clicked: false
                            },
                            {
                                date: '20/03/2020 16:35:00',
                                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                status: 'sent',
                                visible: false,
                                clicked: false
                            }
                        ],
                    },
                    {
                        name: 'Samuele',
                        avatar: '_3',
                        messages: [
                            {
                                date: '28/03/2020 10:10:40',
                                message: 'La Marianna va in campagna',
                                status: 'received',
                                visible: false,
                                clicked: false
                            },
                            {
                                date: '28/03/2020 10:20:10',
                                message: 'Sicuro di non aver sbagliato chat?',
                                status: 'sent',
                                visible: false,
                                clicked: false
                            },
                            {
                                date: '28/03/2020 16:15:22',
                                message: 'Ah scusa!',
                                status: 'received',
                                visible: false,
                                clicked: false
                            }
                        ],
                    },
                    {
                        name: 'Alessandro B.',
                        avatar: '_4',
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Lo sai che ha aperto una nuova pizzeria?',
                                status: 'sent',
                                visible: false,
                                clicked: false
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Si, ma preferirei andare al cinema',
                                status: 'received',
                                visible: false,
                                clicked: false
                            }
                        ],
                    },
                    {
                        name: 'Alessandro L.',
                        avatar: '_5',
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ricordati di chiamare la nonna',
                                status: 'sent',
                                visible: false,
                                clicked: false
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Va bene, stasera la sento',
                                status: 'received',
                                visible: false,
                                clicked: false
                            }
                        ],
                    },
                    {
                        name: 'Claudia',
                        avatar: '_6',
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao Claudia, hai novità?',
                                status: 'sent',
                                visible: false,
                                clicked: false
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Non ancora',
                                status: 'received',
                                visible: false,
                                clicked: false
                            },
                            {
                                date: '10/01/2020 15:51:00',
                                message: 'Nessuna nuova, buona nuova',
                                status: 'sent',
                                visible: false,
                                clicked: false
                            }
                        ],
                    },
                    {
                        name: 'Federico',
                        avatar: '_7',
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                                status: 'sent',
                                visible: false,
                                clicked: false
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                                status: 'received',
                                visible: false,
                                clicked: false
                            }
                        ],
                    },
                    {
                        name: 'Davide',
                        avatar: '_8',
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                                status: 'received',
                                visible: false,
                                clicked: false
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                                status: 'sent',
                                visible: false,
                                clicked: false
                            },
                            {
                                date: '10/01/2020 15:51:00',
                                message: 'OK!!',
                                status: 'received',
                                visible: false,
                                clicked: false
                            }
                        ],
                    }
                ]
                
            }
        },
        
        methods: {
            selectClass(index) {
                this.activeChat = index;
            },

            sendMessage() {
                const dateTime = this.dateFormatted();
                
                if (this.newMessage !== "") {
                    this.contacts[this.activeChat].messages.push({
                        date: dateTime,
                        message: this.newMessage,
                        status: 'sent',
                        visible: false, 
                        clicked: false
                    })

                    setTimeout(() => {
                        this.contacts[this.activeChat].messages.push({
                            date: dateTime,
                            message: 'ok',
                            status: 'received',
                            visible: false, 
                            clicked: false
                        })
                    }, 1000);
                }
                
                this.newMessage = "";

                console.log(this.contacts[this.activeChat].messages)
            },

            dateFormatted() {
                const today = new Date();

                const date = `${('0' + today.getDate()).slice(-2)}/${('0' + (today.getMonth()+1)).slice(-2)}/${today.getFullYear()}`;

                const time = `${('0' + today.getHours()).slice(-2)}:${('0' + today.getMinutes()).slice(-2)}:${today.getSeconds()}`;

                const dateTime = date +' '+ time;

                return dateTime
            },

            lastMessageText(element) {
                const array = element.messages;

                const lastArrayElement = array[array.length - 1];

                let string;

                if (array.length > 0) {
                    string = lastArrayElement.message;
                } else {
                    string = "Non ci sono messaggi"
                }

                return string
            },

            lastMessageTime(element) {
                const array = element.messages;

                const lastArrayElement = array[array.length - 1];

                let string;

                if(array.length > 0) {

                    if (lastArrayElement.date.slice(0,10) === this.dateFormatted().slice(0,10)) {
                        string = lastArrayElement.date.slice(11,16)
                    } else {
                        string = lastArrayElement.date
                    }
                } else {
                    string = ""
                }

                return string
            },

            latestAccess(array, element1, element2) {
                let message = array[this.activeChat].messages[array[this.activeChat].messages.length - 1];

                let string;
                if (array[this.activeChat].messages.length > 0) {
                    if (message.date.slice(0, 10) === this.dateFormatted().slice(0,10)) {
                        string = element1 + message.date.slice(11,16)
                    } else {
                        string = element2 + message.date
                    }
                } else {
                    string = ""
                }
                
                return string
            },
            
            dropdownContent(element) {
                return element.clicked = !element.clicked
            },

            dropdownHover(element, boolean) {
                if (element.visible === true && element.clicked === true) {
                    
                } else if (element.visible === !boolean) {
                    element.visible = boolean
                }
            },

            cancelMessage(index) {
                this.contacts[this.activeChat].messages.splice(index, 1);
            },
        },

        computed: {
            filteredList() {
                const filter = this.contacts.filter(contact => {
                    return contact.name.toLowerCase().includes(this.searchString.toLowerCase())
                })
                
                this.activeChat = 0;
                
                return filter
            }
        },

    }).mount('#app')