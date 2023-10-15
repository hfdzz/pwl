import { 
    Outlet,
    Link,
} from "react-router-dom";

export default function Tentang() {
    return (
      <>
        {/* very long fake about us page*/}
        <div className="container p-3">
            <div className="row">
              <h1>Tentang Kami</h1>
            </div>
            <div className="row">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget velit vitae libero luctus tincidunt. Nulla facilisi. Donec eget nisl sed ante aliquam ultrices. Sed id semper odio. Nulla facilisi. Donec ultricies, mi et tincidunt luctus, dui ipsum tincidunt mauris, ut aliquet nunc nibh eu ipsum. Sed vitae dolor vitae leo tincidunt aliquam. Nunc at nisl vitae ipsum consequat ultrices. Sed vel semper lectus.
              </p>
            </div>
            <div className="row">
              <div className="col-4">
                <img src="https://placekitten.com/400/300" className="img-fluid" />
              </div>
              <div className="col-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget velit vitae libero luctus tincidunt. Nulla facilisi. Donec eget nisl sed ante aliquam ultrices. Sed id semper odio. Nulla facilisi. Donec ultricies, mi et tincidunt luctus, dui ipsum tincidunt mauris, ut aliquet nunc nibh eu ipsum. Sed vitae dolor vitae leo tincidunt aliquam. Nunc at nisl vitae ipsum consequat ultrices. Sed vel semper lectus.
                </p>
              </div>
              <div className="row">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget velit vitae libero luctus tincidunt. Nulla facilisi. Donec eget nisl sed ante aliquam ultrices. Sed id semper odio. Nulla facilisi. Donec ultricies, mi et tincidunt luctus, dui ipsum tincidunt mauris, ut aliquet nunc nibh eu ipsum. Sed vitae dolor vitae leo tincidunt aliquam. Nunc at nisl vitae ipsum consequat ultrices. Sed vel semper lectus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget velit vitae libero luctus tincidunt. Nulla facilisi. Donec eget nisl sed ante aliquam ultrices. Sed id semper odio. Nulla facilisi. Donec ultricies, mi et tincidunt luctus, dui ipsum tincidunt mauris, ut aliquet nunc nibh eu ipsum. Sed vitae dolor vitae leo tincidunt aliquam. Nunc at nisl vitae ipsum consequat ultrices. Sed vel semper lectus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget velit vitae libero luctus tincidunt. Nulla facilisi. Donec eget nisl sed ante aliquam ultrices. Sed id semper odio. Nulla facilisi. Donec ultricies, mi et tincidunt luctus, dui ipsum tincidunt mauris, ut aliquet nunc nibh eu ipsum. Sed vitae dolor vitae leo tincidunt aliquam. Nunc at nisl vitae ipsum consequat ultrices. Sed vel semper lectus.
                </p>
              </div>
              
            </div>
        </div>
      </>
    );
  }