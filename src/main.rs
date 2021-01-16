use actix_files as fs;
use actix_files::NamedFile;
use actix_web::{HttpRequest, Result};

fn show_index() -> String {
    String::from("index.html")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    use actix_web::{App, HttpServer};

    HttpServer::new(|| {
        App::new().service(fs::Files::new("/", "./public/").index_file(show_index()))
    })
    .bind("127.0.0.1:3002")?
    .run()
    .await
}
