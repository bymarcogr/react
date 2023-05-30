export class MovieInfo {
  id;
  title = "New Movie";
  tagline;
  vote_average = 0;
  vote_count = 0;
  release_date = new Date();
  poster_path;
  overview = 0;
  genres = [];
  budget;
  revenue;
  runtime = 0;

  constructor(obj) {
    obj && Object.assign(this, obj);
  }

  get formatedGenres() {
    if (this.genres == null || this.genres.length === 0) {
      return "";
    }
    if (this.genres.length === 2) {
      return this.genres.join(" & ");
    }

    return this.genres.join(", ");
  }

  get formatedDuration() {
    const minutes = this.runtime % 60;
    const hours = Math.floor(this.runtime / 60);

    return `${hours}h ${minutes}m`;
  }

  get formatedDate() {
    if (this.release_date == null || this.genres.release_date === 0) {
      return "";
    }
    let formatDate = new Date(this.release_date);
    return formatDate.getFullYear();
  }
}
