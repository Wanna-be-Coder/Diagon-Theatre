import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPopulars } from "../../redux/media-list/mediaListAction";
import SectionDirectory from "./SectionDirectory";
import SectionDirectoryToggle from "./SectionDirectoryToggle";

const SecionDirectoryContainer = ({ topMedias, getPopulars }) => {
  useEffect(
    () =>
      //calling all the data for the Home Page
      getPopulars(),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  console.log(topMedias);
  return (
    <div>
      {topMedias.isLoading && topMedias.err !== null ? (
        <div>Loading</div>
      ) : (
        <div>
          {/* <SectionDirectory title='Popular movies'  list={topMedias.popularMovies} media_type='movie' />
               <SectionDirectory title='Popular TV shows'  list={topMedias.popularTvs} media_type='tv'/>
               <SectionDirectory title='Popular People'  list={topMedias.popularPeople} media_type='person' />
               <SectionDirectory title='Trending Movies'  list={topMedias.trending} /> */}
          <SectionDirectoryToggle
            title='What is Popular?'
            toggleName={["Movies", "Tv shows"]}
            list1={topMedias.popularMovies}
            list2={topMedias.popularTvs}
            media_type='shows'
          />
          <SectionDirectoryToggle
            title='What is trending?'
            list1={topMedias.trendingDay}
            list2={topMedias.trendingWeek}
            toggleName={["Day", "Week"]}
            media_type='shows'
          />
          <SectionDirectory
            title='Popular People'
            list={topMedias.popularPeople}
            media_type='person'
          />
        </div>
      )}
    </div>
  );
};
const mapStateToProps = ({ media }) => ({
  topMedias: media,
});

export default connect(mapStateToProps, { getPopulars })(
  SecionDirectoryContainer
);
