var Profile = React.createClass({

	// context so the component can access the router
  	contextTypes: {
      router: React.PropTypes.func
  	},

	render: function() {
	    return (
		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
					<div className="panel panel-info">
					<div className="panel-heading">
						<h3 className="panel-title">Yazan Halawa</h3>
					</div>
					<div className="panel-body">
						<div className="row">
							<div className="col-md-3 col-lg-3 " align="center"> <img alt="User Pic" src="https://scontent-lax3-1.xx.fbcdn.net/hphotos-xpf1/t31.0-8/11875221_10153657071968128_8094074270772212166_o.jpg" className="img-circle img-responsive"/> 
							</div>
							<div className=" col-md-9 col-lg-9 "> 

								<table className="table table-user-information" id="profileInfo">
								<tbody>
								<tr>
								<td>Email:</td>
								<td>monica.keyclub@gmail.com</td>
								</tr>
								<tr>
								<td>Date of Birth:</td>
								<td>08/01/1992</td>
								</tr>
								<tr>
								<tr>
								<td>Gender:</td>
								<td>Female</td>
								</tr>
								<tr>
								<td>Wish 1:</td>
								<td>MacBook Air</td>
								</tr>
								<tr>
								<td>Wish 2:</td>
								<td>Amazon Echo</td>
								</tr>
								<tr>
								<td>Wish 3:</td>
								<td>Karaoke set</td>
								</tr>
								</tr>
								</tbody>
								</table>
								<a href="#" className="btn btn-primary" id="button1">Edit Wish List Items</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	    );
	  }
});

module.exports = Profile