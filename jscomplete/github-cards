// Live demo : https://jscomplete.com/playground/s259726

const CardList = (props) =>(
  <div>
      {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
  </div>
);

function Form(props) {
  const [userName, setUserName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${userName}`).then(resp => props.onSubmit(resp.data));    
    setUserName('');
  };
  
  return (
      <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="GitHub username" 
            value={userName}
            onChange={event => setUserName(event.target.value)}
            required/>
          <button>Add card</button>
      </form>
    );
}

function Card(props) {
	
  	return (
    	<div className="github-profile">
    	  <img src={props.avatar_url} />
        <div className="info">
          <div className="name">{props.name}</div>
          <div className="company">{props.company}</div>
        </div>
    	</div>
    );
  
}

function App(props) {
  
  const [profiles, setProfiles] = useState([]);
  
  const addNewProfile = (profileData) => {
    setProfiles([...profiles, profileData]);
  }
	
  return (
    	<div>
    	  <div className="header">{props.title}</div>
        <Form onSubmit={addNewProfile}/>
        <CardList profiles={profiles}/>
    	</div>
    );
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);
