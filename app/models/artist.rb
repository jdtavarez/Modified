class Artist < ApplicationRecord

    has_one_attached :avatar, service: :s3

    validates :artist_name, presence: true
    validates :bio

    has_many :albums,
    foreign_key: :artist_id,
    class_name: :Album

    has_many :songs,
    foreign_key: :artist_id, 
    class_name: :Song

    has_many :categories,
    through: :category, 
    source: :songs

    has_many :playlists, as :creatable

end