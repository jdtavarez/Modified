class Content < ApplicationRecord

    has_one_attached :media

    validates :title, :length, :artist_id, :album_id, presence: true
    validates :content_type, presence: true, inclusion: { in: %w(podcast music) }
    validates :description

    belongs_to :category, 
    foreign_key: :category_id,
    class_name: :Category

    belongs_to :album,
    foreign_key: :album_id, 
    class_name: :Album

    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :Artist

    has_many :playlists, 
    through: :playlist_content
    
end