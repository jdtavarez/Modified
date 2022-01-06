class Song < ApplicationRecord

    validates :title, :length, :artist_id, :album_id, presence: true
    validates :description

    belongs_to :album,
    foreign_key: :album_id, 
    class_name: :Album

    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :Artist

    has_many :playlists, 
    through: :playlist_content
    
end