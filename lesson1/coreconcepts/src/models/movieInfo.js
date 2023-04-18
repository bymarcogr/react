export class MovieInfo {
  id;
  image_url;
  name = "New Movie";
  release_year;
  genres = [];
  rating;
  duration;
  description;

  constructor(
    id,
    name,
    release_year,
    image_url,
    genres,
    rating,
    duration,
    description
  ) {
    this.id = id;
    this.name = name;
    this.release_year = release_year;
    this.image_url = image_url;
    this.genres = genres;
    this.rating = rating;
    this.duration = duration;
    this.description = description;
  }

  get formatedgenres() {
    if (this.genres == null || this.genres.length === 0) {
      return "";
    }
    if (this.genres.length === 2) {
      return this.genres.join(" & ");
    }

    return this.genres.join(", ");
  }

  get formatedDuration() {
    const minutes = this.duration % 60;
    const hours = Math.floor(this.duration / 60);

    return `${hours}h ${minutes}m`;
  }

  get formatedDate() {
    if (this.release_year == null || this.genres.release_year === 0) {
      return "";
    }

    return this.release_year + "-01-01";
  }
}
