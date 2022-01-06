class Album < ApplicationRecord

    validates :title, :release_year, :artist_id presence: true

    has_one_attached :image, service: :s3

    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :Artist

    has_many :songs,
    foreign_key: :album_id, 
    class_name: :Song

    has_many :categories, 
    through: :category,
    source: :songs
    
end