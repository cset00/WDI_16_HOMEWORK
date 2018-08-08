
# Bookmark.create url: 'https://www.codingblocks.net/podcast/clean-code-writing-meaningful-names/'

# Bookmark.create url: 'https://en.wikipedia.org/wiki/Modal_window'

Bookmark.destroy_all

["http://www.llamaoralpaca.com/", "google.com","https://www.codingblocks.net/podcast/clean-code-writing-meaningful-names/"].each do |url|
    b = Bookmark.new
    b.url = url
    b.title = MetaInspector.new(b.url).best_title
    b.save
end