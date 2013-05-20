desc "compile and run the site"
task :default do
  pids = [
    spawn("jekyll server -w -p 3000"), # put `auto: true` in your _config.yml
    spawn("scss --watch _assets:stylesheets"),
    spawn("coffee -b -w -o javascripts -c _assets/*.coffee")
  ]
 
  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end
 
  loop do
    sleep 1
  end
end