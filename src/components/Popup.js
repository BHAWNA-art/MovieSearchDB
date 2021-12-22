import React from 'react'


function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{selected.Title} <span>({selected.Year})</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} />
					<p>{selected.Plot}</p>
					<table className="info" >
						<tbody>
							<tr>
								<th>
									Actors
								</th>
								<td>
									{selected.Actors}
								</td>
							</tr>
							<tr>
								<th>
									Released
								</th>
								<td>
								{selected.Released}
								</td>
							</tr>
							<tr>
								<th>
									Runtime
								</th>
								<td>
								{selected.Runtime}
								</td>
							</tr>
							<tr>
								<th>
									Awards
								</th>
								<td>
									{selected.Awards}
								</td>
							</tr>
							<tr>
								<th>
									Country
								</th>
								<td>
									{selected.Country}
								</td>
							</tr>
							<tr>
								<th>
									DVD
								</th>
								<td>
								{selected.DVD}
								</td>
							</tr>
							<tr>
								<th>
									Director
								</th>
								<td>
								{selected.Director}
								</td>
							</tr>
							<tr>
								<th>
								Genre
								</th>
								<td>
								{selected.Genre}
								</td>
							</tr>
							
						</tbody>
					</table>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup
