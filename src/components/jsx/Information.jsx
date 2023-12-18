import '../css/Information.css';
import profile from '../images/profile.jpeg';

function Information() {
  return (
    <div className='container-Information'>
      <div className='item'>
        <img src={profile} alt="profile" className="img rounded" />
      </div>
      <div className='item'>
        <h1 className='inf-profile'>Pedro Pablo Lumbí Alvarez</h1>
        <h2 className='inf-profile'>Software developer</h2>
        <label className='inf-profile'>Collaborative, Good teamwork, Problem Solving</label>
        <label className='inf-profile'>Agile methodology: SCRUM, Trello, Jira</label>
        <label className='inf-profile'>Basic English</label>
      </div>
    </div>
  );
}

export default Information;