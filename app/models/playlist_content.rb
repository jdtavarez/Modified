class PlaylistContent < ApplicationRecord

    validates :position, presence: true

    belongs_to :playlist,
    foreign_key: :playlist_id,
    class_name: :Playlist

    belongs_to :content,
    foreign_key: :content_id, 
    class_name: :Content
    
end