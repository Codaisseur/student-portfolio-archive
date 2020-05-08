SELECT* FROM users ;
SELECT "userName", location
from users;
select "userName", location, ST_GeomFromText('POINT(52.35677 4.8556614)', 4326)
from users;
select "userName", location, ST_DistanceSphere(location, ST_GeomFromText('POINT(52.35677 4.8556614)', 4326))
from users;
SELECT 1;
SELECT ST_GeomFromText(52 4);
SELECT ST_GeomFromText('52 4');
SELECT ST_GeomFromText(POINT('52 4'));
SELECT ST_GeomFromText('POINT(52 4)', 4326);
SELECT ST_DistanceSphere(ST_GeomFromText('POINT(52 4)', 4326), ST_GeomFromText('POINT(52 3)', 4326));
SELECT 
     st_distance_sphere(
           st_point(-69.23, 44.61)::geography, st_point(-75.42, 43.55)::geography
     );
SELECT ST_DistanceSphere(ST_GeomFromText('POINT(52.35677 4.8556614)', 4326), ST_GeomFromText('POINT(52.3595872 4.874286)', 4326));



SELECT 
  "book"."id", 
  "book"."title", 
  "book"."language", 
  "book"."isAvailable", 
  "book"."imageUrl", 
  "book"."description", 
  "book"."author", 
  "book"."borrowingPeriod", 
  "book"."createdAt", 
  "book"."updatedAt", 
  "book"."userId", 
  "user"."id" AS "user.id", 
  "user"."location" AS "user.location",
  ST_Dwithin("user"."location", ST_MakePoint(4.845841,52.350083)::geography, '5000')
FROM "books" AS "book" 
  LEFT OUTER JOIN "users" AS "user" ON "book"."userId" = "user"."id" 
 -- WHERE 
  -- ST_Dwithin(location, ST_MakePoint(4.845841,52.350083)::geography, '20000') IS NULL;