# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'jekyll' do
  watch(%r{_layouts|_posts/.+\.(haml|md)}) { `rake haml` }
  ignore %r{_site|assets|stylesheets/}
end

guard :coffeescript, :input => '_coffee', :output => 'assets/js/'

guard 'livereload' do
  watch(%r{_layouts/.+\.(erb|haml|slim)$})
  watch(%r{_scss/.+\.(scss)})
  watch(%r{_coffee/.+\.(coffee)})
end
