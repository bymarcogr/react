export class MovieInfo {
  id;
  image_url;
  name = "New Movie";
  release_year;
  genders = [];
  rating;
  duration;
  description;

  constructor(
    id,
    name,
    release_year,
    image_url,
    genders,
    rating,
    duration,
    description
  ) {
    this.id = id;
    this.name = name;
    this.release_year = release_year;
    this.image_url = image_url;
    this.genders = genders;
    this.rating = rating;
    this.duration = duration;
    this.description = description;
  }

  get formatedGenders() {
    if (this.genders == null || this.genders.length === 0) {
      return "";
    }
    if (this.genders.length === 2) {
      return this.genders.join(" & ");
    }

    return this.genders.join(", ");
  }

  get formatedDuration() {
    const minutes = this.duration % 60;
    const hours = Math.floor(this.duration / 60);

    return `${hours}h ${minutes}m`;
  }
}
