1. What problem does the context API help solve?
<br/>
It allows developers to store our state in context and gives developers access to state in all of the components.
<br/>

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
<br/>
 `actions` are literally actions that users could interact with our application. `actions` would trigger `reducers`, `reducers` are where the logic of `actions` are. `store` is where developers see changes since it contains state for the application. This state never gets mutates, this is why it is known as a 'single source of truth.'
<br/>

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
<br/>
    Application state contains all of the state in our application, on the other hand Component state stores state locally in that specific component. Developer would use the application state if they are planning to have many components that need access to different parts of state that are very nested and props starting to get messy and confusing.  
<br/>

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
<br/>
    `redux-thunk` allows developers to handle asynchronous operations inside our Action Creators. It changes our action creators to perform async API calls.
<br/>

1. What is your favorite state management system you've learned and this sprint? Please explain why!
<br/>
    Redux is more advanced and powerful to use in a heavy application but I have only know it for about 1 week,
    so I would personally prefer context as a state management for this sprint because this sprint is not as complicated. Context makes "connecting" pieces easier than redux because there are less steps and I am more familiar with it. However, it's just a matter of experience and time before I get biased with Redux! :) 
<br/>
